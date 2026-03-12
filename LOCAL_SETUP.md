# 💻 Local Development Guide

Follow these steps to set up and run the portfolio project on your local machine.

## 📋 Prerequisites

- **Node.js**: Version 20 or higher is recommended.
- **npm**: Standard package manager included with Node.js.

---

## 🚀 Getting Started

### 1. Clone the Repository
If you haven't already:
```bash
git clone https://github.com/chhayanshp11/chhayanshp11.github.io.git
cd chhayanshp11.github.io
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
OR use the one-click script:
```bash
./run-local.sh
```

### 4. Stop the Development Server
- **In Terminal**: Press `Ctrl + C`.
- **Using Script**: Run `./stop-local.sh` with the following options:
  - `./stop-local.sh` (stops default ports 3000/3001)
  - `./stop-local.sh all` (stops ALL Next.js processes on the machine)
  - `./stop-local.sh 3005` (stops a specific port)
  - `./stop-local.sh 3000 3001 8000` (stops multiple ports)

The site should now be running at [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Common Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the development server with Hot Module Replacement (HMR). |
| `npm run build` | Creates an optimized production build (static export). |
| `npm run lint` | Runs ESLint to check for code quality and potential errors. |

---

## 🌿 Branching Workflow
For a professional development experience, we recommend using the `develop` branch for local changes:
1. Check out the branch: `git checkout develop`
2. Make your changes and test locally.
3. Push to verify: `git push origin develop` (This triggers automated validation but **no** deployment).

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).
