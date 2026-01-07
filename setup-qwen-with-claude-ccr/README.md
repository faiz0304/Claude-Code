# Qwen + Claude Code Router Setup Guide

This repository provides a **step-by-step guide** to configure **Qwen (via Qwen Code CLI)** with **Claude Code Router (CCR)** so you can use Qwen models inside Claude Code workflows.

The guide is written for **Windows (PowerShell)** users and assumes basic familiarity with Node.js and CLI tools.

YouTube Video Guide Link: https://youtu.be/i9nmSibzjiE

---

## 📌 Prerequisites

Before starting, ensure the following are installed:

- **Node.js (LTS recommended)**
  ```bash
  node --version
  node -v
  npm -v
  ```
- **Windows PowerShell**
- Internet access (for OAuth authentication)

---

## 1️⃣ Install Qwen Code CLI

```bash
npm install -g @qwen-code/qwen-code@latest
```

Verify:
```bash
qwen
```

---

## 2️⃣ Authenticate Qwen & Get Access Token

```bash
qwen /auth
```

Credentials file:
```
%USERPROFILE%\.qwen\oauth_creds
```

Example:
```json
{
  "access_token": "cAf......._w",
  "token_type": "Bearer",
  "refresh_token": "3Q.......YHA",
  "resource_url": "portal.qwen.ai",
  "expiry_date": 1767526648205
}
```

Copy **only** the `access_token`.

---

## 3️⃣ Install Claude Code & Claude Code Router

```bash
npm install -g @anthropic-ai/claude-code @musistudio/claude-code-router
```

Verify:
```bash
claude --version
ccr version
```

---

## 4️⃣ Create Router Directory

```powershell
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.claude-code-router"
```

---

## 5️⃣ Configure config.json

Path:
```
%USERPROFILE%\.claude-code-router\config.json
```

```json
{
  "LOG": true,
  "LOG_LEVEL": "info",
  "HOST": "127.0.0.1",
  "PORT": 3456,
  "API_TIMEOUT_MS": 600000,
  "Providers": [
    {
      "name": "qwen",
      "api_base_url": "https://portal.qwen.ai/v1/chat/completions",
      "api_key": "PASTE_YOUR_QWEN_ACCESS_TOKEN_HERE",
      "models": ["qwen3-coder-plus"],
      "transformer": { "use": ["qwen"] }
    }
  ],
  "Router": {
    "default": "qwen,qwen3-coder-plus",
    "background": "qwen,qwen3-coder-plus",
    "think": "qwen,qwen3-coder-plus",
    "longContext": "qwen,qwen3-coder-plus",
    "longContextThreshold": 60000
  }
}
```

Replace the token and save.

---

## 6️⃣ Start Router

```bash
ccr start
```

---

## 7️⃣ Run Claude Code

```bash
ccr code
```

Test:
```
hi
```

---

## 🔒 Security

Add to `.gitignore`:
```gitignore
.claude-code-router/config.json
.qwen/oauth_creds
```

---

## ⭐ Support

If this helped you, star the repo and share it.
