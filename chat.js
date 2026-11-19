(() => {
  const API_URL = "https://93pz4yy8xd.execute-api.us-east-1.amazonaws.com/chat";
  const T = {
    en: {
      open: "Ask about Gastón", title: "Ask about Gastón", ph: "Ask about my career, skills or certs…", send: "Send",
      hello: "Hi! I'm an AI assistant that answers questions about Gastón's career, skills and certifications.",
      starters: ["What migrations has Gastón done?", "What are his main AWS skills?", "How can I contact him?"],
      limit: "The daily question limit was reached. Please reach out to Gastón on LinkedIn.",
      error: "Something went wrong. Please try again in a moment.",
    },
    es: {
      open: "Preguntá sobre Gastón", title: "Preguntá sobre Gastón", ph: "Preguntá sobre su carrera, skills o certificaciones…", send: "Enviar",
      hello: "¡Hola! Soy un asistente de IA que responde preguntas sobre la carrera, skills y certificaciones de Gastón.",
      starters: ["¿Qué migraciones hizo Gastón?", "¿Cuáles son sus skills principales en AWS?", "¿Cómo puedo contactarlo?"],
      limit: "Se alcanzó el límite diario de preguntas. Escribile a Gastón por LinkedIn.",
      error: "Algo salió mal. Probá de nuevo en un momento.",
    },
  };
  const lang = () => (document.documentElement.lang === "es" ? "es" : "en");
  const tr = (k) => T[lang()][k];

  const css = `
  .gfb-btn{position:fixed;right:20px;bottom:20px;z-index:50;font:700 .8rem "Space Grotesk",sans-serif;text-transform:uppercase;letter-spacing:.04em;padding:12px 18px;background:var(--hi);color:var(--hi-ink);border:3px solid var(--ink);cursor:pointer}
  .gfb-btn:hover{background:var(--ink);color:var(--bg)}
  .gfb-panel{position:fixed;right:20px;bottom:20px;z-index:60;width:min(380px,calc(100vw - 40px));height:min(560px,calc(100vh - 40px));display:none;flex-direction:column;background:var(--bg);color:var(--ink);border:3px solid var(--ink);font:15px/1.45 "Space Grotesk",sans-serif}
  .gfb-panel.open{display:flex}
  .gfb-head{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:var(--ink);color:var(--bg);font-weight:700;text-transform:uppercase;font-size:.8rem}
  .gfb-head button{background:none;border:0;color:inherit;font:inherit;cursor:pointer}
  .gfb-log{flex:1;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:10px}
  .gfb-m{padding:8px 12px;border:2px solid var(--ink);max-width:88%;white-space:pre-wrap;word-wrap:break-word}
  .gfb-m a{color:inherit;font-weight:700;text-decoration:underline}
  .gfb-m.u{align-self:flex-end;background:var(--hi);color:var(--hi-ink)}
  .gfb-chips{display:flex;flex-direction:column;gap:6px}
  .gfb-chips button{text-align:left;background:none;color:inherit;border:2px solid var(--ink);padding:6px 10px;font:inherit;cursor:pointer}
  .gfb-chips button:hover{background:var(--ink);color:var(--bg)}
  .gfb-form{display:flex;border-top:3px solid var(--ink)}
  .gfb-form input{flex:1;min-width:0;border:0;padding:12px 14px;background:var(--bg);color:var(--ink);font:inherit;outline:none}
  .gfb-form button{border:0;border-left:3px solid var(--ink);background:var(--ink);color:var(--bg);padding:0 16px;font:700 .8rem "Space Grotesk",sans-serif;text-transform:uppercase;cursor:pointer}
  .gfb-form button:disabled{opacity:.5}`;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  };

  const btn = el("button", "gfb-btn");
  const panel = el("div", "gfb-panel");
  const head = el("div", "gfb-head");
  const title = el("span");
  const close = el("button", "", "✕");
  close.setAttribute("aria-label", "Close");
  head.append(title, close);
  const log = el("div", "gfb-log");
  log.setAttribute("aria-live", "polite");
  const form = el("form", "gfb-form");
  const input = el("input");
  input.maxLength = 500;
  const send = el("button");
  send.type = "submit";
  form.append(input, send);
  panel.append(head, log, form);
  document.body.append(btn, panel);

  let history = [];
  let busy = false;

  const fill = (node, text) => {
    node.textContent = "";
    const clean = text.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, "$2");
    clean.split(/(https:\/\/[^\s)]+)/g).forEach((part) => {
      if (/^https:\/\//.test(part)) {
        const a = el("a", "", part.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, ""));
        a.href = part; a.target = "_blank"; a.rel = "noopener noreferrer";
        node.appendChild(a);
      } else node.appendChild(document.createTextNode(part));
    });
  };

  const add = (text, who) => {
    const m = el("div", "gfb-m " + (who === "user" ? "u" : "a"));
    fill(m, text);
    log.appendChild(m);
    log.scrollTop = log.scrollHeight;
    return m;
  };

  function labels() {
    btn.textContent = tr("open");
    title.textContent = tr("title");
    input.placeholder = tr("ph");
    send.textContent = tr("send");
  }

  function intro() {
    log.textContent = "";
    history = [];
    add(tr("hello"), "assistant");
    const chips = el("div", "gfb-chips");
    tr("starters").forEach((q) => {
      const b = el("button", "", q);
      b.type = "button";
      b.onclick = () => ask(q);
      chips.appendChild(b);
    });
    log.appendChild(chips);
  }

  async function ask(text) {
    if (busy || !text.trim()) return;
    busy = true;
    send.disabled = true;
    log.querySelector(".gfb-chips")?.remove();
    add(text, "user");
    history.push({ role: "user", content: text });
    input.value = "";
    const pending = add("…", "assistant");
    try {
      const r = await fetch(API_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: history.slice(-6) }),
      });
      if (r.status === 429) throw new Error("limit");
      if (!r.ok) throw new Error("error");
      const data = await r.json();
      fill(pending, data.reply);
      history.push({ role: "assistant", content: data.reply });
    } catch (e) {
      pending.textContent = e.message === "limit" ? tr("limit") : tr("error");
      history.pop();
    } finally {
      busy = false;
      send.disabled = false;
      log.scrollTop = log.scrollHeight;
    }
  }

  form.addEventListener("submit", (e) => { e.preventDefault(); ask(input.value); });
  btn.onclick = () => { panel.classList.add("open"); btn.style.display = "none"; if (!log.children.length) intro(); input.focus(); };
  close.onclick = () => { panel.classList.remove("open"); btn.style.display = ""; };
  new MutationObserver(() => { labels(); if (log.children.length <= 2) intro(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  labels();
})();
