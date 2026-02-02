# Plugins in Claude Code — Practical Video Guide

Youtube-Video-Link:
[Plugins in Claude Code — Practical Guide](https://youtu.be/PPnVh4GSo8M?si=hK91wPBNkTIO9bLU)

---

## Theory (Quick Overview)

Plugins are bundles that add multiple Claude Code capabilities at once:

- Skills  
- Commands  
- Subagents  
- Hooks  
- MCP integrations  

One install activates multiple features.  
Check marketplaces first before building custom workflows.

---

## Practical Walkthrough

### Step 1 — Open Plugin Manager

Run:

```claude-code-cli-command
/plugin
```


You see **three tabs**:

1. **Discover** → Browse and search plugins  
2. **Installed** → Manage installed plugins  
3. **Marketplace** → Manage plugin sources  

---

### Step 2 — Discover Tab

- Search bar at the top → type any plugin name  
- **4 shortcuts**:  
  - `Type` → search  
  - `Space` → toggle selection  
  - `Enter` → view details  
  - `Esc` → back  

---

### Step 3 — Installed Tab

- Navigate with **left arrow** from Discover  
- Shows installed plugins and MCP servers  
- If empty → no plugins installed  
- `Esc` → back  

---

### Step 4 — Marketplace Tab

- Navigate → manage marketplaces  
- Shows current sources (e.g., `claude-plugins-official`)  
- **Options**:  
  - `Enter` → select  
  - `U` → update  
  - `R` → remove  
  - `Esc` → back  

---

### Step 5 — Install a Plugin

- Go back to **Discover**  
- Example: `frontend-design` plugin  
- Install it → plugin appears in Installed tab  

Check Installed folder → now contains plugin files (was empty before)

---

### Step 6 — Use the Plugin in a Project

- Create a new project  
- Give prompt: "Make a portfolio page using HTML, CSS, JavaScript"  
- Plugin generates the project structure and code automatically  

---

## Conclusion

- Plugins save setup time by bundling skills, hooks, commands, and integrations  
- Always check **Discover** first  
- Installed plugins appear in **Installed** tab  
- Marketplaces can be added or managed via **Marketplace** tab  
- Use plugins for practical workflows instead of building from scratch  

End.
