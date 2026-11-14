# Contributing

Small PRs are easiest to review. If it's a bigger change or a new tool, open an issue first so we can talk about it.

Merged changes go live on mctoolshub.com within a few hours.

## Setup

```bash
node scripts/build.mjs
python3 -m http.server -d site 8000
```

Rebuild after each change and refresh the page.

## Where things are

- Text, steps and FAQ: `tools/<name>/tool.json`
- Form fields and output boxes: `tools/<name>/panel.html`
- What the tool does: its `init...()` function in `assets/tools.js`

## Adding a tool

1. Copy an existing tool folder in `tools/` and rename it.
2. In `panel.html`, keep the outer `<div class="tool-panel" data-tool="...">` and give it a new type. Use the same type as `toolType` in `tool.json`.
3. Write an `init...()` function for it in `assets/tools.js` and add it to the list in `boot()`.
4. Add the folder name to `tools/order.json`.

## A few rules

- Tools run in the browser only. No servers, logins, tracking or calls to other sites.
- Don't put `<script>` tags in `panel.html`, the JS goes in `assets/tools.js`.
- No new dependencies please.
