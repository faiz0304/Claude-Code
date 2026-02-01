# Plugins in Claude Code — Practical Guide

[Plugins in Claude Code — Practical Guide](https://www.youtube.com/@faizcodesai)

Plugins are installable bundles that add multiple Claude capabilities at once.

A single plugin can include:

- skills
- commands
- subagents
- hooks
- MCP integrations

One install = many features activated.

---

## Mental Model

Claude Code core = engine  
Plugin = extension module  
Marketplace = distribution layer

You don’t build everything manually.  
You load capabilities.

---

## Why Plugins Exist

Manual setup requires:

- configuring MCP servers
- wiring skills
- adding automation
- testing compatibility

Plugins compress all of this into one step:

```cmd
/plugin install github@claude-plugins-official
```

Rule: **search marketplace before building custom.**

---

## Open Plugin Manager

Run:

```claude-code-cli
/plugin
```


This opens the Plugin Manager.

Tabs:

- Discover → browse plugins
- Installed → manage plugins
- Marketplaces → plugin sources
- Errors → debugging

This is your control panel.

---

## Install a Plugin (Two Methods)

Example plugin: commit automation

### Method 1 — Install with UI

1. Run `/plugin`
2. Open **Discover** tab
3. Find `commit-commands`
4. Press **Enter**
5. Select install scope → choose **User**

The plugin installs immediately.

### Method 2 — Install with command

```cmd
/plugin install commit-commands@claude-plugins-official
```


Same result. Faster for advanced users.

---

## Use the Plugin Immediately

After installation:

```claude-code-cli
/commit-commands:commit
```


Result:

1. stages files
2. generates commit message
3. creates commit

No manual git typing.

Plugins are workflow accelerators.

---

## Code Intelligence Plugins

These add IDE-style features:

- jump to definitions
- reference search
- type errors

Install example:

```cmd
/plugin install github@claude-plugins-official
/plugin install slack@claude-plugins-official
```


Claude can now operate inside those platforms.

---

## Installation Scope

Each plugin has scope:

User → all your projects  
Project → shared with repo  
Local → only this repository

Recommendation:

- personal tools → User
- team standards → Project

---

## Managing Plugins

Disable:
```cmd
/plugin disable plugin@marketplace
```

Enable:
```cmd
/plugin disable plugin@marketplace
```

Remove:
```cmd
/plugin uninstall plugin@marketplace
```

View installed plugins in:
```claude-code-cli
/plugin → Installed
```


---

## Add Custom Marketplaces

Add plugin sources:
```cmd
/plugin marketplace add owner/repo
```


Local development:
```cmd
/plugin marketplace add ./my-marketplace
```

This supports private ecosystems.

---

## Decision Framework

Install plugin when:

- task is common
- integration already exists
- workflow is repeatable

Build custom when:

- no plugin matches
- workflow is unique
- advanced automation needed

Reuse first. Build second.

---

## 5 Rules to Remember

1. Plugins bundle multiple systems
2. Marketplace before custom build
3. Install → test immediately
4. Scope matters
5. Plugins automate real workflows

---

End.

