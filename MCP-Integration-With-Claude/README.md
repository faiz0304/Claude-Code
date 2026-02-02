# MCP Integration – Beginner Friendly Guide

Youtube-Video-Link: [MCP Integration in Claude Code — Practical Guide](https://youtu.be/CBA2a3PkYng?si=mnlVDQRdjaM4Jxt8)

## What is MCP?
MCP (Model Context Protocol) allows Claude Code to safely connect with external tools like websites, documentation, APIs, and databases.

By default, Claude can only see files on your computer. MCP gives it **controlled access** to the outside world.

---

## Why MCP is Needed
Without MCP:
- Claude can only read and edit local files
- No web browsing
- No live documentation
- No API or database access

With MCP:
- Claude can browse websites
- Fetch latest documentation
- Interact with tools securely

---

## Simple Analogy
Think of Claude as an assistant sitting in your room.

- Without MCP: The assistant can only use what is inside the room.
- With MCP: You give the assistant a phone directory of approved experts.

MCP is that phone directory.

---

## What is an MCP Server?
An MCP server is a specific helper Claude can use.

Examples:
- Playwright MCP → Browse websites
- Context7 MCP → Fetch latest documentation
- GitHub MCP → Explore repositories
- Database MCP → Query databases

Claude can only use MCP servers that **you install and approve**.

---

## Practical Guide: MCP Step by Step

This section is designed for **live practical demo**.
Everything is explained step by step, including **which file/folder to open, what to copy, and where to paste**. 

---

### Step 0: Open Your Folder

1. Go to the folder where you want to use Claude CLI.  
   Example: `C:\Users\YourName\Documents\MCPDemo` (Windows)  
   or `/home/yourname/MCPDemo` (Linux/Mac)
2. Open **Command Prompt (Windows)** or **Terminal (Linux/Mac)** in this folder.
3. Make sure you have **Claude CLI installed** and working.

---

### Step 1: Pre-Check Existing MCP Servers

Before adding anything, always check how many MCP servers are already installed.

Option A: Run on terminal:
```
claude mcp list
```

Option B: Run on Claude CLI:
```
claude mcp list
```
OR
```
/mcp
```

Possible results:
- **Empty list** → No MCP servers installed (this is normal for beginners)
- **Some servers listed** → MCP is already in use on your system

This step helps you avoid duplicate installations.

---

### Step 2: Add MCP Servers

Now add beginner-friendly MCP servers. These commands are **copied from this file** and pasted **directly into Claude CLI**.

#### 2.1 Add Playwright MCP (for web browsing)

Option A: Run on Terminal:
```
npm install @playwright/mcp
```
Option B: from Claude CLI (Recommended)
```
claude mcp add --transport stdio playwright npx @playwright/mcp@latest
```
- What happens:
  - Claude now can browse websites
  - Only through **approved Playwright MCP server**

#### 2.2 Add Context7 MCP (for latest documentation)

Option A: Run on Terminal:
```
npm install @upstash/context-mcp
```

Option B: from Claude CLI (Recommended)
```
claude mcp add --transport stdio context7 npx @upstash/context7-mcp
```

- What happens:
  - Claude can fetch **up-to-date documentation**
  - Only through **approved Context7 MCP server**

---

### Step 3: Verify MCP Servers

After installation, check everything is correctly installed.

####Option A from Terminal:
Option 1:
```
claude mcp list
```
Option 2:
Playwright:
```
npx @playwright/mcp@latest --version
```
Context7:
```
npx @upstash/context7-mcp --version
```

####Option B: Run in **Claude CLI**:
```
claude mcp list
```

You should now see:
- playwright
- context7

- If they appear, MCP is successfully configured.

---

### Step 4: Test MCP Servers (Very Important)

Now test if Claude can actually use them.

#### 4.1 Test Web Browsing (Playwright MCP)
- Command to run in **Claude CLI**:
```
Use the Playwright MCP to browse Amazon and find 3 men's casual shirts under $30.
```

Claude will:
- Open Amazon
- Browse pages
- Collect product data
- Return results in text form

---

#### 4.2 Test Documentation Fetching (Context7 MCP)
- Command to run in **Claude CLI**:
```
Use the Context7 MCP to fetch the latest documentation about MCP in Claude Code.
```

Claude will:
- Fetch up-to-date docs
- Summarize key points
- Provide links

No coding required.

---

## Security Notes (Important)
- Only install trusted MCP servers
- Never paste API keys directly into files
- Use environment variables or system prompts
- MCP uses permission-based access

---

## Key Takeaway
MCP extends Claude Code from local files to real-world tools using secure, approved connections.

This is the foundation of **Agentic AI**.

---

## Next Steps
- Practice more browsing tasks with Playwright MCP
- Use Context7 MCP whenever you need latest documentation
- Explore advanced MCP servers: GitHub, Database, Custom MCP
