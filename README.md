# gastonfreire.com.ar

Personal portfolio for Gastón Freire.

## Files

- `index.html` — site structure and content
- `styles.css` — all visual styles, responsive layout and dark/light themes
- `script.js` — theme toggle, EN/ES language toggle, mobile navigation and reveal animations

## Run locally on macOS

From this folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also open `index.html` directly in a browser, but using a local HTTP server is closer to how it will behave online.

## Publish with GitHub Pages

### 1. Create a GitHub repository

Recommended repository name:

```text
gastonfreire
```

### 2. Initialize and push

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USER/gastonfreire.git
git push -u origin main
```

### 3. Enable GitHub Pages

In GitHub:

```text
Repository
→ Settings
→ Pages
→ Build and deployment
→ Source: Deploy from a branch
→ Branch: main
→ Folder: / (root)
→ Save
```

GitHub will give you a temporary URL similar to:

```text
https://YOUR_GITHUB_USER.github.io/gastonfreire/
```

## Connect gastonfreire.com.ar

Once GitHub Pages is enabled:

1. In GitHub Pages, set the custom domain to:

```text
gastonfreire.com.ar
```

2. GitHub will show the DNS records that must be configured.

3. Configure those DNS records wherever the DNS zone for `gastonfreire.com.ar` is hosted.

A common setup is to manage DNS through Cloudflare while keeping the domain registered at NIC Argentina.

## Before publishing

Search for these items and customize them:

- GitHub links, when available
- Exact job title
- AWS certifications
- Project case studies
- Email/contact method, if desired

## Suggested next improvements

- Individual pages for each project
- Architecture diagrams
- GitHub repository links
- Resume/CV download
- OpenGraph image for LinkedIn sharing
- Custom favicon
- Contact form
- Analytics
