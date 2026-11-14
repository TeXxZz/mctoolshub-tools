# mctoolshub-tools

Source for the server tools on [mctoolshub.com](https://mctoolshub.com/tools). MOTD and gradient generators, server icon converter, server.properties, SRV records, Velocity and Geyser helpers and a few more.

It's all plain HTML, CSS and JS that runs in the browser. Nothing to install.

Anything merged into `main` shows up on mctoolshub.com within a few hours.

## Tools

| Tool | |
| --- | --- |
| [MOTD Generator](https://mctoolshub.com/tools/motd-generator) | Create a Minecraft server MOTD with colors, formatting, examples, and live preview. Copy the output for your server.properties file. |
| [Color Code Generator](https://mctoolshub.com/tools/color-code-generator) | Generate Minecraft color codes, preview formatted text, and copy legacy or hex color formats for server configs, chat, ranks, and menus. |
| [Gradient Text Generator](https://mctoolshub.com/tools/gradient-text-generator) | Generate Minecraft gradient text for ranks, chat, menus, scoreboards, and server branding. Copy MiniMessage or legacy hex output. |
| [Server Icon Converter](https://mctoolshub.com/tools/server-icon-converter) | Convert an image into a 64x64 Minecraft server icon and download it as server-icon.png for your Java server. |
| [server.properties Generator](https://mctoolshub.com/tools/server-properties-generator) | Generate a Minecraft server.properties file with common Java server settings like MOTD, max players, difficulty, PvP, whitelist, and view distance. |
| [SRV Record Generator](https://mctoolshub.com/tools/srv-record-generator) | Generate Minecraft SRV and A record values so players can join using a clean domain without typing a port. |
| [Tellraw Generator](https://mctoolshub.com/tools/tellraw-generator) | Build simple Minecraft tellraw JSON commands with text, colors, bold formatting, hover text, and clickable links. |
| [Command Generator](https://mctoolshub.com/tools/command-generator) | Generate simple Minecraft commands for broadcast messages, titles, subtitles, and actionbar announcements. |
| [Whitelist Command Generator](https://mctoolshub.com/tools/whitelist-generator) | Generate Minecraft whitelist commands for adding, removing, enabling, or disabling whitelist access for multiple players. |
| [Server RAM Calculator](https://mctoolshub.com/tools/ram-calculator) | Estimate Minecraft server RAM based on player count, plugins, modpacks, and world type. Get a practical starting point for hosting. |
| [Velocity Config Generator](https://mctoolshub.com/tools/velocity-config-generator) | Generate safe starter Velocity proxy config snippets, backend server entries, and Paper forwarding settings for a Minecraft network. |
| [Geyser & Floodgate Checklist Generator](https://mctoolshub.com/tools/geyser-floodgate-checklist) | Generate a beginner-friendly checklist for installing Geyser and Floodgate on a single server or Velocity proxy network. |
| [Votifier Setup Helper](https://mctoolshub.com/tools/votifier-setup-helper) | Generate a Votifier setup checklist for vote sites, NuVotifier, reward plugins, ports, keys, and testing votes. |
| [Server Launch Checklist](https://mctoolshub.com/tools/server-launch-checklist) | Generate a launch checklist for Minecraft server owners covering security, performance, voting, DNS, backups, rules, and listing pages. |

## Running it locally

Needs Node 18+.

```bash
node scripts/build.mjs
python3 -m http.server -d site 8000
```

Then open http://localhost:8000.

## Layout

```
tools/order.json            the order tools are listed in
tools/<name>/tool.json      title, description, how-to steps, FAQ
tools/<name>/panel.html     the form and output boxes
assets/tools.js             the logic, one init function per tool
assets/style.css            styles (dark and light theme)
scripts/build.mjs           builds the local preview into site/
```

## Contributing

PRs are welcome, see [CONTRIBUTING.md](CONTRIBUTING.md).

If you run a server you might also like [MinecraftServersList](https://minecraftservers-list.com) (vote-based server list) and [MCHostingHub](https://mchostinghub.com) (hosting comparison). Setup guides are on [mctoolshub.com/guides](https://mctoolshub.com/guides).

## License

MIT. Not affiliated with Mojang or Microsoft.
