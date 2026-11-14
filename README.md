# MCToolsHub — open-source Minecraft server tools

The tools behind [mctoolshub.com](https://mctoolshub.com): MOTDs, color codes, gradients, server icons, `server.properties`, SRV records, Velocity, Geyser and Votifier helpers.

Everything runs in the browser. No account, no tracking in the tools, no dependencies.

**Changes merged here go live on mctoolshub.com automatically.**

## Tools

| Tool | What it does |
| --- | --- |
| [Minecraft MOTD Generator](https://mctoolshub.com/tools/motd-generator) | Create a Minecraft server MOTD with colors, formatting, examples, and live preview. Copy the output for your server.properties file. |
| [Minecraft Color Code Generator](https://mctoolshub.com/tools/color-code-generator) | Generate Minecraft color codes, preview formatted text, and copy legacy or hex color formats for server configs, chat, ranks, and menus. |
| [Minecraft Gradient Text Generator](https://mctoolshub.com/tools/gradient-text-generator) | Generate Minecraft gradient text for ranks, chat, menus, scoreboards, and server branding. Copy MiniMessage or legacy hex output. |
| [Minecraft Server Icon Converter](https://mctoolshub.com/tools/server-icon-converter) | Convert an image into a 64x64 Minecraft server icon and download it as server-icon.png for your Java server. |
| [Minecraft server.properties Generator](https://mctoolshub.com/tools/server-properties-generator) | Generate a Minecraft server.properties file with common Java server settings like MOTD, max players, difficulty, PvP, whitelist, and view distance. |
| [Minecraft SRV Record Generator](https://mctoolshub.com/tools/srv-record-generator) | Generate Minecraft SRV and A record values so players can join using a clean domain without typing a port. |
| [Minecraft Tellraw Generator](https://mctoolshub.com/tools/tellraw-generator) | Build simple Minecraft tellraw JSON commands with text, colors, bold formatting, hover text, and clickable links. |
| [Minecraft Command Generator](https://mctoolshub.com/tools/command-generator) | Generate simple Minecraft commands for broadcast messages, titles, subtitles, and actionbar announcements. |
| [Minecraft Whitelist Command Generator](https://mctoolshub.com/tools/whitelist-generator) | Generate Minecraft whitelist commands for adding, removing, enabling, or disabling whitelist access for multiple players. |
| [Minecraft Server RAM Calculator](https://mctoolshub.com/tools/ram-calculator) | Estimate Minecraft server RAM based on player count, plugins, modpacks, and world type. Get a practical starting point for hosting. |
| [Velocity Config Generator](https://mctoolshub.com/tools/velocity-config-generator) | Generate safe starter Velocity proxy config snippets, backend server entries, and Paper forwarding settings for a Minecraft network. |
| [Geyser & Floodgate Checklist Generator](https://mctoolshub.com/tools/geyser-floodgate-checklist) | Generate a beginner-friendly checklist for installing Geyser and Floodgate on a single server or Velocity proxy network. |
| [Minecraft Votifier Setup Helper](https://mctoolshub.com/tools/votifier-setup-helper) | Generate a Votifier setup checklist for vote sites, NuVotifier, reward plugins, ports, keys, and testing votes. |
| [Minecraft Server Launch Checklist](https://mctoolshub.com/tools/server-launch-checklist) | Generate a launch checklist for Minecraft server owners covering security, performance, voting, DNS, backups, rules, and listing pages. |

## Run it locally

You need Node 18 or newer.

```bash
node scripts/build.mjs
python3 -m http.server -d site 8000
# open http://localhost:8000
```

## How it's organised

```
tools/
  order.json              order the tools appear in
  <tool-name>/
    tool.json             title, description, intro, how-to steps, FAQ
    panel.html            the tool's form and output boxes
assets/
  tools.js                all tool logic – each tool has an init…() function
  style.css               shared styles (dark + light theme)
scripts/build.mjs         builds the local preview into ./site
```

## Contributing

Bug fixes, new output formats and new tools are welcome – see [CONTRIBUTING.md](CONTRIBUTING.md).

## Part of a small network for server owners

- [MinecraftServersList](https://minecraftservers-list.com) – list your server, ranked by real player votes
- [MCHostingHub](https://mchostinghub.com) – compare Minecraft hosting
- [MCToolsHub guides](https://mctoolshub.com/guides) – step-by-step server setup guides

## License

MIT – see [LICENSE](LICENSE). Not affiliated with Mojang or Microsoft.
