# 🚀 9Router Setup Guide (Beginner Friendly)

Free AI Routing System --- Complete Practical Setup

Learn how to run multiple AI models with automatic fallback, zero
downtime, and minimum cost.

YouTube Tutorial: https://youtube.com/@faizcodesai

------------------------------------------------------------------------

## 📌 Project Purpose

This repository explains how to setup 9Router, a smart AI router that
connects your coding tools with multiple AI providers automatically.

Goal:

-   Use AI continuously without interruption
-   Reduce API cost
-   Automatically switch models when limits are reached
-   Create a stable AI development workflow

This README is written to be followed step-by-step along with the video
tutorial.

------------------------------------------------------------------------

## ⚙️ What is 9Router?

9Router acts as a local AI gateway between your tools and AI providers.

Your Tool → 9Router → Multiple AI Providers

If one model stops working or quota ends, it automatically switches to
another.

Result:

-   No manual switching
-   No workflow interruption
-   Better cost control

------------------------------------------------------------------------

## 🧠 Core Concept

9Router uses a 3-Layer Fallback System:

1.  Subscription Models → Best Quality
2.  Cheap Models → Backup
3.  Free Models → Unlimited Safety Layer

When one fails → next layer activates automatically.

------------------------------------------------------------------------

## 🏗️ System Flow

Coding Tool / IDE\
↓\
http://localhost:20128/v1\
↓\
9Router\
↓\
AI Providers (Auto Switch)

------------------------------------------------------------------------

## ✅ Requirements

-   Node.js (v20 or higher)
-   Internet connection
-   Basic terminal knowledge

------------------------------------------------------------------------

## ⚡ Installation

### Step 1 --- Install Globally

npm install -g 9router\
9router

Dashboard opens at: http://localhost:20128

------------------------------------------------------------------------

### Step 2 --- Connect Provider

Dashboard → Providers

Connect any available provider: - Claude Code - Gemini CLI - Free
Providers

Login using OAuth and finish setup.

------------------------------------------------------------------------

### Step 3 --- Copy API Details

From dashboard copy:

Endpoint: http://localhost:20128/v1

API Key

------------------------------------------------------------------------

### Step 4 --- Use Inside Your Tool

Base URL: http://localhost:20128/v1\
API Key: \[dashboard key\]\
Model: if/kimi-k2-thinking

Now your tool runs through 9Router.

------------------------------------------------------------------------

## 🎯 Recommended Beginner Setup

Primary: Gemini CLI (Free quota)\
Fallback: iFlow Models (Unlimited)\
Backup: Qwen Models (Unlimited)

Cost: \$0

------------------------------------------------------------------------

## 📊 What You Get

-   Automatic model switching
-   Continuous AI usage
-   Centralized dashboard
-   Usage tracking
-   Cost optimization
-   OpenAI-compatible API endpoint

------------------------------------------------------------------------

## 🔧 Useful URLs

Dashboard: http://localhost:20128/dashboard\
API Endpoint: http://localhost:20128/v1

------------------------------------------------------------------------

## 🧩 Supported Tools

-   Cursor
-   Claude Code
-   Codex CLI
-   OpenClaw
-   Cline
-   Custom AI Apps

------------------------------------------------------------------------

## ❗ Common Issues

Model not responding → Check provider quota in dashboard.

Connection error → Verify endpoint URL: http://localhost:20128/v1

Login expired → Reconnect provider from dashboard.

------------------------------------------------------------------------

## 🧱 Tech Stack

-   Node.js
-   Next.js
-   React
-   Tailwind CSS
-   Local JSON Database
-   OAuth Authentication

------------------------------------------------------------------------

## 📺 Full Video Tutorial

https://youtube.com/@faizcodesai

------------------------------------------------------------------------

## 📄 License

Original project follows MIT License.
