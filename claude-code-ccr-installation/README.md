# Claude Code + Claude Code Router (CCR) Setup Guide (Windows)

This guide explains how to install, verify, and configure **Claude Code** and **Claude Code Router (CCR)** step by step.
It is beginner-friendly and suitable for teaching via YouTube.

---

## 1. Prerequisites

### 1.1 Install Node.js (Required)

Claude Code and CCR both require **Node.js v18 or later**.

#### Check if Node.js is already installed
```powershell
node --version
npm -v
```

If Node.js is **not installed** or the version is below v18:

- Download from: https://nodejs.org
- Install the **LTS version**
- Restart PowerShell after installation

Recheck:
```powershell
node --version
```

---

## 2. Install Claude Code & Claude Code Router (CCR)

Install both tools globally using **npm**.

```powershell
npm install -g @anthropic-ai/claude-code @musistudio/claude-code-router
```

This installs:
- `claude` → Claude Code CLI
- `ccr` → Claude Code Router CLI

---

## 3. Verify Installation

### 3.1 Check Claude Code version
```powershell
claude --version
```

### 3.2 Check CCR version
```powershell
ccr version
```

Both commands should return version numbers without errors.

---

## 4. Create Required Configuration Folders (Windows)

Run the following PowerShell commands:

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude"
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude-code-router"
```

---

## 5. Folder Structure (After Setup)

```text
C:\Users\<YourUsername>\
│
├── .claude\
│
└── .claude-code-router\
```

These folders will store configuration files, API keys, and routing settings.

---

## 6. Common Issues & Fixes

### `claude is not recognized`
Restart PowerShell and reinstall:
```powershell
npm install -g @anthropic-ai/claude-code
```

### `ccr command not found`
```powershell
npm install -g @musistudio/claude-code-router
```

---

## 7. Next Steps

In the next stage you can:
- Add API keys
- Configure CCR routing
- Use Claude Code in real projects
- Connect multiple AI models via CCR

---

## 8. Summary

- Install Node.js (v18+)
- Install Claude Code and CCR
- Verify versions
- Create config folders
- Ready to use Claude Code professionally

---

**End of README**
