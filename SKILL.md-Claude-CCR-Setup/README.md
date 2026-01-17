# AI-Driven Project Development with Claude / CCR

This repository demonstrates how to build a **Smart To-Do List App** using **Claude Code or CCR (Claude Code Router)** with a structured, AI-driven workflow and **SKILL.md**.

The focus is on **clear guidance, repeatable steps, and clean AI usage**, not random prompting.

---
## Prerequisities

Before starting, make sure you have
- Windows 10/11
- Node.js(LTS version recommended)
- Claude/Claude-Code-Router(CCR)
- Have Some Basic Knowledge About Computer
  
---

## Project Overview

**Project Name:** Smart To-Do List App  
**Tech Stack:** HTML, CSS, Vanilla JavaScript  

**Features:**
- Add and delete tasks
- Mark tasks as completed
- Persist data using LocalStorage
- Dark mode toggle
- Responsive UI

---

## Part 1: Project Setup

### Step 1: Create Project Folder

Open **PowerShell or Command Prompt**, then run:

```bash
mkdir smart-todo-app
cd smart-todo-app
```

---

## Part 2: Start Claude (Two Supported Ways)

### Option A: Start Claude Code (Official CLI)

Open **PowerShell / CMD** and run:

```bash
claude
```

Use this option if:
- Claude CLI is installed
- You are using the official Claude environment

---

### Option B: Start Using CCR (Claude Code Router)

Use this option if:
- You are routing Claude via CCR
- You are using external APIs (Qwen, OpenAI, etc.)

#### Step 1: Open PowerShell or CMD

Make sure you are inside your project folder:

```bash
cd smart-todo-app
```

#### Step 2: Start CCR

Run:

```bash
ccr start
```

You should see:
- Model initialized
- API key loaded
- CCR ready state

#### Step 3: Open a New PowerShell / CMD Window

Do **not stop CCR**.

Open a **new PowerShell or CMD window**, navigate again to the project folder:

```bash
cd smart-todo-app
```

#### Step 4: Start CCR Code Interface

Run:

```bash
ccr code
```

Now you can send prompts exactly like Claude Code.

---

## Part 3: Create Project Context (CLAUDE.md)

`CLAUDE.md` provides **persistent context and rules** for the AI.

### Prompt 1: Create CLAUDE.md

```
Create a CLAUDE.md file for a beginner Smart To-Do List App.

Tech: HTML, CSS, vanilla JavaScript
Style: Clean, minimal, beginner-friendly
Purpose: Learn structured AI-driven development
```

Claude will generate:
- Project overview
- Folder structure
- Coding conventions
- Best practices

---

### Prompt 2: Add Design System

```
Add a design system to CLAUDE.md with:
- Primary color: blue
- Secondary color: gray
- Spacing system: 8px base
- Simple typography scale
- Button and card styles
```

---

### Prompt 3: Add Development Goals

```
Update CLAUDE.md with these goals:
1. Task input UI
2. Task list rendering
3. Complete / delete actions
4. LocalStorage persistence
5. Dark mode support
```

---

## Part 4: Create AI Skills

### Step 1: Create Skill-Creator

```
Create a skill-creator skill in .claude/skills/skill-creator/

It should:
1. Ask what the skill does
2. Ask for trigger phrases
3. Generate a complete SKILL.md
```

This skill allows fast creation of future skills.

---

### Step 2: Create UI Helper Skill

```
Use skill-creator to create a ui-helper skill.

Purpose: Design clean UI components
Should know: Design system from CLAUDE.md
Should do: Generate accessible HTML/CSS
```

---

### Step 3: (Optional) Create JavaScript Helper Skill

```
Use skill-creator to create a js-helper skill.

Purpose: Write clean, beginner-friendly JavaScript logic
```

---

## Part 5: Build the Application

### Step 1: HTML Structure

```
Create HTML structure for a Smart To-Do App.
Include header, task input, task list, and dark mode toggle.
```

---

### Step 2: Styling

```
Using ui-helper skill, style the app.
Follow CLAUDE.md design system.
Make it responsive.
```

---

### Step 3: JavaScript Logic

```
Using js-helper skill, add JavaScript for:
- Add task
- Delete task
- Toggle complete
- Save tasks in LocalStorage
- Dark mode toggle
```

---

## Recommended Workflow

1. Setup project and start Claude / CCR  
2. Create CLAUDE.md  
3. Define design system and goals  
4. Create skills  
5. Build UI and logic  
6. Improve and refactor  

---

## Author

**Faiz Ur Rehman Ashrafi**  
GitHub: https://github.com/faiz0304  
LinkedIn: https://www.linkedin.com/in/faiz-ur-rehman-ashrafi-75b7203a0

---

_Stop writing. Start prompting._

## ⭐ Support

If this helped you, star the repo and share it.
