# 🚀 CI/CD & Deployment Guide

This project follows a professional dual-branch deployment strategy to ensure the live environment remains stable while allowing for rapid testing.

## 🌿 Branching Strategy

| Branch | Purpose | Automated Action |
| :--- | :--- | :--- |
| **`main`** | **Production**: Stable, user-facing code. | **Build + Live Deployment** |
| **`develop`** | **Staging**: Testing new features and refactors. | **Build Validation** (No auto-deploy) |

---

## 🛠️ Deployment Flow

### 1. Automatic Deployment
- Any push or merge to the **`main`** branch will trigger an automatic production build and update the live site at [chhayanshp11.github.io](https://chhayanshp11.github.io).

### 2. Manual Trigger (Live Testing)
If you want to test the **`develop`** branch live on the actual URL before merging to main, follow these steps:

1.  Navigate to the **[Actions](https://github.com/chhayanshp11/chhayanshp11.github.io/actions)** tab in GitHub.
2.  Select the **"GitHub Pages Deployment"** workflow.
3.  Click the **"Run workflow"** button.
4.  Set **"Use workflow from"** to `develop`.
5.  Set **"Target Environment"** to `production`.
6.  Click **"Run workflow"**.

### 3. Safety/Validation (Sandbox)
- Every push to **`develop`** triggers a "Sandbox" run by default.
- This run installs dependencies and builds the project to check for lint errors or compilation issues.
- It **never** updates the live site, protecting your production environment from experimental code.
