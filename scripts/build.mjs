// Builds a local preview of every tool into ./site
// Usage: node scripts/build.mjs   (no dependencies, Node 18+)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "site");
const LIVE = "https://mctoolshub.com";

export function loadTools(root = ROOT) {
  const order = JSON.parse(fs.readFileSync(path.join(root, "tools", "order.json"), "utf8"));
  return order.map((slug) => {
    const dir = path.join(root, "tools", slug);
    const meta = JSON.parse(fs.readFileSync(path.join(dir, "tool.json"), "utf8"));
    const body = fs.readFileSync(path.join(dir, "panel.html"), "utf8").trim();
    return { slug, path: `/tools/${slug}`, ...meta, body };
  });
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function page({ title, description, canonical, depth, main }) {
  const up = depth ? "../".repeat(depth) : "./";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${esc(canonical)}">
  <link rel="icon" type="image/png" href="${up}assets/favicon.png">
  <script>try{if(localStorage.getItem("mcth-theme")==="light")document.documentElement.setAttribute("data-theme","light")}catch(e){}</script>
  <link rel="stylesheet" href="${up}assets/style.css">
</head>
<body>
  <header class="site-header">
    <div class="site-header-inner">
      <a class="brand" href="${up}" aria-label="MCToolsHub tools">
        <img src="${up}assets/favicon.png" class="brand-logo" alt="" width="36" height="36">
        <span class="brand-text"><strong>MCToolsHub</strong><small style="font-family:ui-monospace,monospace;font-size:.65rem;letter-spacing:.04em">&gt;_ local preview</small></span>
      </a>
      <nav class="nav" data-nav aria-label="Main navigation">
        <a href="${up}">All tools</a>
        <a href="${LIVE}/guides" rel="noopener">Setup guides</a>
        <a href="https://minecraftservers-list.com/" rel="noopener">Server List</a>
        <a href="https://mchostinghub.com/" rel="noopener">Hosting</a>
      </nav>
      <div class="header-actions">
        <button class="theme-toggle" data-theme-toggle type="button" aria-label="Toggle theme">💡</button>
        <button class="menu-button" data-menu-button type="button" aria-label="Open menu">Menu</button>
      </div>
    </div>
  </header>
  <main>${main}</main>
  <footer class="site-footer">
    <div class="footer-bottom"><span>MCToolsHub tools · MIT licensed · Not affiliated with Mojang or Microsoft.</span><span>Live site: <a class="text-link" href="${LIVE}">mctoolshub.com</a></span></div>
  </footer>
  <script src="${up}assets/tools.js" defer></script>
</body>
</html>
`;
}

function related(tools, current) {
  return tools.filter((t) => t.slug !== current.slug)
    .sort((a, b) => (a.group === current.group ? -1 : 1) - (b.group === current.group ? -1 : 1))
    .slice(0, 4);
}

function build() {
  const tools = loadTools();
  fs.rmSync(OUT, { recursive: true, force: true });
  const write = (rel, data) => { const f = path.join(OUT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, data); };

  const card = (t) => `<a class="tool-card" data-tool-card data-tool-name="${esc((t.title + " " + t.description + " " + (t.keywords || []).join(" ")).toLowerCase())}" href="./${t.slug}/"><span class="badge">${esc(t.badge || "Tool")}</span><h3>${esc(t.h1)}</h3><p>${esc(t.description)}</p><span class="card-link">Open tool</span></a>`;

  write("index.html", page({
    title: "MCToolsHub — Open-Source Minecraft Server Tools",
    description: "Free, open-source tools for Minecraft server owners.",
    canonical: `${LIVE}/tools`,
    depth: 0,
    main: `<section class="page-hero container"><p class="eyebrow">Open source · MIT</p><h1>Minecraft server tools</h1><p>${tools.length} free tools for server owners. Everything runs in your browser.</p><div class="tool-search-wrap"><input class="tool-search" data-tool-search placeholder="Search tools, e.g. MOTD, icon, SRV, tellraw"></div></section><section class="container section"><div class="tool-grid">${tools.map(card).join("")}</div></section>`,
  }));

  for (const t of tools) {
    write(`${t.slug}/index.html`, page({
      title: t.title,
      description: t.description,
      canonical: `${LIVE}${t.path}`,
      depth: 1,
      main: `
      <nav class="breadcrumb container"><a href="../">Tools</a> › <span>${esc(t.h1)}</span></nav>
      <section class="page-hero container tool-hero"><p class="eyebrow">Free Minecraft tool</p><h1>${esc(t.h1)}</h1><p>${esc(t.intro)}</p></section>
      <section class="container tool-wrap">
        <div>
          ${t.body}
          <section class="content-section" style="margin-top:18px"><h2>How to use this tool</h2><ol>${t.howTo.map((s) => `<li>${esc(s)}</li>`).join("")}</ol></section>
          <section class="content-section" style="margin-top:18px"><h2>FAQ</h2><div class="faq-list">${t.faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</div></section>
        </div>
        <aside class="tool-side">
          <h2>Related tools</h2>
          ${related(tools, t).map((r) => `<a class="related-card" href="../${r.slug}/"><strong>${esc(r.h1)}</strong><span>${esc(r.description)}</span></a>`).join("")}
        </aside>
      </section>`,
    }));
  }

  for (const f of ["style.css", "tools.js", "favicon.png"]) write(`assets/${f}`, fs.readFileSync(path.join(ROOT, "assets", f)));
  console.log(`Built ${tools.length} tools into ./site — preview with: python3 -m http.server -d site 8000`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) build();
