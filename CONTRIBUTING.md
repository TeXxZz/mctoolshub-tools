# Contributing

Thanks for helping! Small, focused pull requests are easiest to review. Merged changes go live on https://mctoolshub.com within a few hours.

## Good first contributions

- Fix a bug in a tool (open an issue first if it's not obvious)
- Add an output format (e.g. another plugin's color syntax)
- Improve a tool's help text or FAQ in its `tool.json`
- Suggest a new tool in an issue

## Working on a tool

1. Fork the repo and clone it.
2. Run `node scripts/build.mjs`, then `python3 -m http.server -d site 8000` and open http://localhost:8000.
3. Change the tool:
   - text, steps and FAQ → `tools/<tool-name>/tool.json`
   - form fields and output boxes → `tools/<tool-name>/panel.html`
   - behaviour → its `init…()` function in `assets/tools.js`
4. Rebuild, test in the browser, then open a pull request saying what changed.

## Adding a new tool

1. Create `tools/<new-tool>/tool.json` and `panel.html` (copy an existing tool as a starting point).
2. Wrap the form in `<div class="tool-panel" data-tool="<type>">` and set the same `toolType` in `tool.json`.
3. Add an `init…()` function in `assets/tools.js` and add it to the list in `boot()`.
4. Add the tool name to `tools/order.json`.

## Rules

- Keep tools client-side: no servers, accounts, trackers or external requests.
- No `<script>` tags in `panel.html` – logic belongs in `assets/tools.js`.
- No new dependencies.
- Be kind in issues and reviews.
