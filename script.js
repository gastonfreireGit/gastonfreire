const translations = {
  en: {
    "nav.about":"About","nav.journey":"Journey","nav.cases":"Case studies","nav.certifications":"Certifications","nav.skills":"Skills","nav.contact":"Contact",
    "hero.eyebrow":"AWS • Cloud Architecture • Infrastructure","hero.greeting":"Hi, I'm","hero.lead":"I design and improve cloud infrastructure with a strong focus on AWS architecture, migrations, Infrastructure as Code and automation.","hero.cases":"Explore case studies","hero.focus":"Focus","hero.location":"Based in",
    "hero.architectureLabel":"Architecture mindset","hero.architectureTitle":"From requirement to reliable infrastructure.","hero.arch1":"Understand","hero.arch1Sub":"Business & constraints","hero.arch2":"Design","hero.arch2Sub":"Trade-offs & patterns","hero.arch3":"Automate","hero.arch3Sub":"IaC & repeatability","hero.arch4":"Operate","hero.arch4Sub":"Observe & improve",
    "about.kicker":"About","about.title":"Cloud engineering beyond the service list.","about.p1":"I enjoy understanding why a system behaves the way it does, then turning that understanding into architecture, automation and operational improvements.","about.p2":"My work is centered on AWS infrastructure, migrations, networking and Infrastructure as Code. I care about making technical decisions understandable, repeatable and useful for the people who operate the system.","about.ownershipTitle":"Ownership","about.ownershipText":"Understand the problem end-to-end and take responsibility for moving it forward.","about.clarityTitle":"Clarity","about.clarityText":"Good architecture is easier to operate when decisions and trade-offs are explicit.","about.improveTitle":"Continuous improvement","about.improveText":"Automate what repeats, document what matters and keep refining the system.",
    "journey.kicker":"Career journey","journey.title":"What each stage taught me.","journey.intro":"More than job titles: technical growth, professional growth and the way each experience shaped how I work.",
    "cases.kicker":"AWS architecture & case studies","cases.title":"Problems, decisions and outcomes.","cases.intro":"Generic project names, real architecture patterns. The goal is to explain the problem, the decision and the result without exposing client information.",
    "certs.kicker":"Certifications","certs.title":"Structured learning, applied in practice.","certs.intro":"This section is prepared to mirror the complete certification list from LinkedIn.",
    "skills.kicker":"Skills","skills.title":"Primary focus first.","skills.intro":"Technologies grouped by how they fit into my work instead of a flat list.",
    "education.kicker":"Education","education.title":"Technical foundations.","dyn.principles":"Professional principles","dyn.location":"Location","contact.kicker":"Contact","contact.title":"Let's talk cloud, architecture and infrastructure.","contact.text":"LinkedIn is the easiest way to reach me. You can also explore the code behind this site on GitHub.",
    "dyn.technical":"Technical growth","dyn.values":"Professional growth","dyn.challenge":"Challenge","dyn.decision":"Decision","dyn.solution":"Solution","dyn.outcome":"Outcome","dyn.architecture":"Architecture","dyn.credential":"View credential","dyn.pending":"More LinkedIn certifications will be added here."
  },
  es: {
    "nav.about":"Sobre mí","nav.journey":"Trayectoria","nav.cases":"Casos de estudio","nav.certifications":"Certificaciones","nav.skills":"Skills","nav.contact":"Contacto",
    "hero.eyebrow":"AWS • Arquitectura Cloud • Infraestructura","hero.greeting":"Hola, soy","hero.lead":"Diseño y mejoro infraestructura cloud con foco en arquitectura AWS, migraciones, Infrastructure as Code y automatización.","hero.cases":"Ver casos de estudio","hero.focus":"Foco","hero.location":"Ubicación",
    "hero.architectureLabel":"Mentalidad de arquitectura","hero.architectureTitle":"Del requerimiento a una infraestructura confiable.","hero.arch1":"Entender","hero.arch1Sub":"Negocio y restricciones","hero.arch2":"Diseñar","hero.arch2Sub":"Trade-offs y patrones","hero.arch3":"Automatizar","hero.arch3Sub":"IaC y repetibilidad","hero.arch4":"Operar","hero.arch4Sub":"Observar y mejorar",
    "about.kicker":"Sobre mí","about.title":"Ingeniería cloud más allá de la lista de servicios.","about.p1":"Me gusta entender por qué un sistema se comporta como lo hace y convertir ese entendimiento en arquitectura, automatización y mejoras operativas.","about.p2":"Mi trabajo se centra en infraestructura AWS, migraciones, networking e Infrastructure as Code. Me importa que las decisiones técnicas sean entendibles, repetibles y útiles para quienes van a operar el sistema.","about.ownershipTitle":"Ownership","about.ownershipText":"Entender el problema de punta a punta y asumir responsabilidad para llevarlo adelante.","about.clarityTitle":"Claridad","about.clarityText":"La arquitectura es más fácil de operar cuando las decisiones y trade-offs son explícitos.","about.improveTitle":"Mejora continua","about.improveText":"Automatizar lo repetitivo, documentar lo importante y seguir refinando el sistema.",
    "journey.kicker":"Trayectoria profesional","journey.title":"Qué me enseñó cada etapa.","journey.intro":"Más que cargos: crecimiento técnico, crecimiento profesional y cómo cada experiencia moldeó mi forma de trabajar.",
    "cases.kicker":"Arquitectura AWS & casos de estudio","cases.title":"Problemas, decisiones y resultados.","cases.intro":"Nombres genéricos, patrones reales. La idea es explicar el problema, la decisión y el resultado sin exponer información de clientes.",
    "certs.kicker":"Certificaciones","certs.title":"Aprendizaje estructurado, aplicado en la práctica.","certs.intro":"Esta sección está preparada para reflejar la lista completa de certificaciones de LinkedIn.",
    "skills.kicker":"Skills","skills.title":"Primero, el foco principal.","skills.intro":"Tecnologías agrupadas según cómo encajan en mi trabajo, en vez de una lista plana.",
    "education.kicker":"Educación","education.title":"Bases técnicas.","dyn.principles":"Principios profesionales","dyn.location":"Ubicación","contact.kicker":"Contacto","contact.title":"Hablemos de cloud, arquitectura e infraestructura.","contact.text":"LinkedIn es la forma más simple de contactarme. También podés ver el código de este sitio en GitHub.",
    "dyn.technical":"Crecimiento técnico","dyn.values":"Crecimiento profesional","dyn.challenge":"Desafío","dyn.decision":"Decisión","dyn.solution":"Solución","dyn.outcome":"Resultado","dyn.architecture":"Arquitectura","dyn.credential":"Ver credencial","dyn.pending":"Próximamente se agregarán más certificaciones de LinkedIn."
  }
};

const root = document.documentElement;
let currentLanguage = localStorage.getItem("language") || "en";

function t(key) {
  return translations[currentLanguage][key] || key;
}

function applyLanguage(lang) {
  currentLanguage = lang;
  root.lang = lang;
  document.getElementById("languageToggle").textContent = lang === "en" ? "ES" : "EN";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  localStorage.setItem("language", lang);
  renderDynamicContent();
}

function renderCareer() {
  const principlesTarget = document.getElementById("professionalPrinciples");
  const principles = portfolioContent[currentLanguage].professionalPrinciples;
  principlesTarget.innerHTML = `
    <span class="profile-values-label">${t("dyn.principles")}</span>
    <div class="profile-values-list">${principles.map(x => `<span>${x}</span>`).join("")}</div>
  `;

  const target = document.getElementById("careerTimeline");
  const items = portfolioContent[currentLanguage].career;

  target.innerHTML = items.map((job, index) => `
    <article class="career-card reveal visible">
      <div class="career-rail">
        <span class="career-dot"></span>
        <span class="career-line"></span>
      </div>
      <div class="career-main">
        <div class="career-head">
          <div>
            <h3>${job.company}</h3>
            ${job.location ? `<p class="career-location">${job.location}</p>` : ""}
          </div>
          <span class="career-index">${String(index + 1).padStart(2, "0")}</span>
        </div>

        <div class="career-roles">
          ${job.roles.map(role => `
            <div class="career-role-row">
              <strong>${role.role}</strong>
              <span>${role.period}</span>
            </div>
          `).join("")}
        </div>

        <p class="career-summary">${job.summary}</p>

        <div class="learning-grid">
          <div class="learning-card">
            <h4>${t("dyn.technical")}</h4>
            <ul>${job.technical.map(x => `<li>${x}</li>`).join("")}</ul>
          </div>
          <div class="learning-card">
            <h4>${t("dyn.values")}</h4>
            <ul>${job.professional.map(x => `<li>${x}</li>`).join("")}</ul>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

function renderDiagram(nodes) {
  return `<div class="mini-diagram">
    ${nodes.map((node, i) => `
      <div class="diagram-node">${node}</div>
      ${i < nodes.length - 1 ? `<span class="diagram-arrow">→</span>` : ""}
    `).join("")}
  </div>`;
}

function renderCases() {
  const target = document.getElementById("caseStudies");
  const items = portfolioContent[currentLanguage].cases;

  target.innerHTML = items.map(item => `
    <article class="case-card ${item.featured ? "case-featured" : ""} reveal visible">
      <div class="case-top">
        <span class="case-category">${item.category}</span>
        <span class="case-arrow">↗</span>
      </div>
      <h3>${item.title}</h3>

      <div class="case-details">
        <div><span>${t("dyn.challenge")}</span><p>${item.challenge}</p></div>
        <div><span>${t("dyn.decision")}</span><p>${item.decision}</p></div>
        <div><span>${t("dyn.solution")}</span><p>${item.solution}</p></div>
        <div><span>${t("dyn.outcome")}</span><p>${item.outcome}</p></div>
      </div>

      <div class="case-architecture">
        <span>${t("dyn.architecture")}</span>
        ${renderDiagram(item.diagram)}
      </div>

      <div class="tag-list">${item.services.map(x => `<span>${x}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderCertifications() {
  const target = document.getElementById("certificationGrid");
  const items = portfolioContent[currentLanguage].certifications;

  target.innerHTML = items.map(item => `
    <article class="cert-card reveal visible">
      <div class="cert-badge">${item.badge}</div>
      <div>
        ${item.issuer ? `<span class="cert-issuer">${item.issuer}</span>` : ""}
        <h3>${item.name}</h3>
        ${item.year ? `<p>${item.year}</p>` : ""}
        ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${t("dyn.credential")} ↗</a>` : ""}
      </div>
    </article>
  `).join("");
}

function renderEducation() {
  const target = document.getElementById("educationGrid");
  const items = portfolioContent[currentLanguage].education;

  target.innerHTML = items.map(item => `
    <article class="education-card reveal visible">
      <span class="education-period">${item.period}</span>
      <h3>${item.institution}</h3>
      <p>${item.program}</p>
    </article>
  `).join("");
}

function renderSkills() {
  const target = document.getElementById("skillsGrid");
  const groups = portfolioContent[currentLanguage].skills;

  target.innerHTML = groups.map(group => `
    <article class="skill-card reveal visible">
      <span class="skill-level">${group.level}</span>
      <h3>${group.title}</h3>
      <div class="tag-list">${group.items.map(x => `<span>${x}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderDynamicContent() {
  renderCareer();
  renderCases();
  renderCertifications();
  renderEducation();
  renderSkills();
}

const savedTheme = localStorage.getItem("theme");
const systemLight = window.matchMedia("(prefers-color-scheme: light)").matches;
root.dataset.theme = savedTheme || (systemLight ? "light" : "dark");

document.getElementById("themeToggle").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});

document.getElementById("languageToggle").addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "es" : "en");
});

const mobileNav = document.getElementById("mobileNav");
document.getElementById("menuButton").addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});
mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileNav.classList.remove("open")));

window.addEventListener("scroll", () => {
  document.getElementById("siteHeader").classList.toggle("scrolled", window.scrollY > 8);
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

applyLanguage(currentLanguage);
