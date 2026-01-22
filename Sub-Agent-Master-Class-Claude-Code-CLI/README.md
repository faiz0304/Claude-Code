# 🧠 Subagents – CLaude Code CLI 
## 🎯 Subagent Masterclass: Building Your AI Team

---

## 📌 Overview

This content explains how to build **AI subagents** in **Claude Code CLI** and how they work together as a **team of specialists** under one main agent.  
You will learn what subagents are, how they differ from skills, and how to create and test them in minutes.

---

## 🎬 The Hook: Why Subagents Matter

Imagine you're planning a wedding.

Would you hire **one person** to:
- Cook food
- Take photos
- Play music
- Design the venue?

Of course not.

You hire **specialists**:
- A chef
- A photographer
- A DJ
- A decorator

👉 **This is exactly how AI agents work.**

Instead of forcing one AI to do everything, we create **subagents**—each expert at a specific job.

---

## 🏗️ The Agent Hierarchy

```
┌─────────────────────────────────────────────┐
│           MAIN CLAUDE CODE                  │
│           (You talk to this)                │
└──────────────┬──────────────────────────────┘
               │
               │ "Create a quiz for my students"
               │
               ▼
┌──────────────────────────────────────────────┐
│        SUBAGENT: Quiz Master                │
│        (Makes strategic decisions)          │
│  - Difficulty level?                        │
│  - Number of questions?                    │
│  - Question types?                          │
│  - Explanations included?                   │
│  - Pakistani/local context?                │
└─────┬────────────────────────────────────────┘
      │
      │ Uses skills as tools
      │
      ├─────────────┬──────────────┬────────────┬────────────┐
      ▼             ▼              ▼            ▼
┌─────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐
│ Skill:  │  │ Skill:   │  │ Skill:   │  │ Skill:  │
│Question │  │Difficulty│  │Answer    │  │Feedback │
│Generator│  │Balancer  │  │Key Maker │  │Writer   │
└─────────┘  └──────────┘  └──────────┘  └─────────┘
```

---

## 🤖 What Is a Subagent?

A **subagent** is a specialized AI assistant that:

- ✅ Has expertise in **one specific domain**
- ✅ Makes **5–10+ autonomous decisions**
- ✅ Delivers **complete work**, not just advice
- ✅ Works in an **isolated context** (clean workspace)

Subagents are **doers**, not helpers.

---

## 🛠️ Creating Your First Subagent

### Step 1: Launch Subagent Creation

```
/agents → Create new agent → Project → Generate with Claude
```

---

### Step 2: Describe the Subagent

Example description for a **Quiz Master** subagent:

```markdown
Create quizzes.

What you do:
- Ask about topic, student level, and quiz purpose
- Create complete quiz with questions, answer key, and feedback
- Balance difficulty (easy / medium / hard)
- Make it fair and educational, not just testing
- Use Pakistani context (local names, Urdu phrases)

When students struggle, give encouraging feedback
```

---

### Step 3: Test the Subagent

Example test prompt:

```markdown
Create a 10-question quiz on AI Agents for 2nd-year students.
```

**Expected Result:**  
A complete quiz package including:
- Questions
- Answer key
- Marking guide
- Constructive feedback

---

## 🧰 Skills: Optional Tools for Subagents

**Skills** are reusable templates or recipes that a subagent can use.

### Key Difference

- **Skill** = Recipe  
  - 2–4 decisions  
  - Provides structure or guidance  

- **Subagent** = Chef  
  - 5+ decisions  
  - Uses skills to produce real output  

---

### Example Skills for Quiz Master

1. `question-generator` – Question format templates  
2. `difficulty-balancer` – Easy/medium/hard distribution logic  
3. `answer-key-maker` – Detailed explanation format  
4. `feedback-writer` – Constructive feedback templates  

---

### Folder Structure

```
.claude/agents/   → Subagents
.claude/skills/   → Skills
```

> ⚠️ Important:  
> Subagents work **perfectly without skills**.  
> Skills are **advanced and optional**. Add them later if needed.

---

## 💡 More Subagent Ideas

### For Educators
- Assignment Grader
- Lecture Planner
- Email Responder

### For Developers
- Code Reviewer
- Bug Investigator
- API Documenter

### For Students
- Study Session Planner
- Career Advisor
- Assignment Breaker

---

## ✅ Key Takeaways

1. **Subagent = Specialist AI with decision-making power**
2. Subagents can be created in **2 minutes**
3. Claude provides only **two built-in agents** (Plan, Explore)
4. **Skills are optional**, not required
5. Subagents are **reusable** for recurring tasks

---

## 🎯 Your Challenge

Create **one subagent** for a task you do repeatedly and share it with the group.

---

## 📖 Quick Reference

```
CREATE:  /agents → Create → Describe → Done
TEST:    "Use [subagent-name] to [task]"
EXAMPLE: "Use quiz-master to create a 20-question quiz"
