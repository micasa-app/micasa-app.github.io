

# Build and Run Locally

**Prerequisites:**  Node.js

1. `cd` into `micasa-app.github.io` folder.
2.  Install dependencies:
   `npm install`
3. Run the app:
   `npm run dev`
4. Preview `localhost`.


# Contribute to Micasa App

Thank you for your interest in contributing to Micasa App! To maintain code quality and keep our project organized, we require all contributors to follow our branching and Pull Request (PR) guidelines.

### 🚀 Our Contribution Workflow

We use a strict branching strategy. All new features, bug fixes, and documentation updates must target a `feature/*` branch. **Direct contributions to the main branches are not allowed.**

#### Step 1: Fork and Clone the Repository
First, fork this repository to your own GitHub account, then clone it locally:
```bash
git clone git@github.com:YOUR-USERNAME/micasa-app.github.io.git
cd micasa-app.github.io
```

#### Step 2: Create a Feature Branch
Your local branch name must start with the `feature/` prefix. Choose a descriptive name for your work.
```bash
git checkout -b feature/your-feature-name
```
*Examples of good branch names:*
* `feature/dark-mode-ui`
* `feature/fix-login-bug`
* `feature/update-documentation`

#### Step 3: Commit Your Changes
Make your changes locally and commit them with a clear, concise commit message:
```bash
git add .
git commit -m "Add descriptive message about your changes"
```

#### Step 4: Push to Your Fork
Push your local feature branch up to your remote GitHub fork:
```bash
git push origin feature/your-feature-name
```

#### Step 5: Open a Pull Request
1. Navigate to the main [Micasa App Repository](https://github.com/micasa-app/micasa-app.github.io).
2. Click on the **Pull Requests** tab, then click **New Pull Request**.
3. Set the **base repository** branch to the specific `feature/*` branch you want to target (do not target `main`).
4. Set the **head repository** to your fork and select your `feature/your-feature-name` branch.
5. Provide a clear description of your changes and submit the PR.

---

### ⚠️ Important Rules

* **Target Branch:** Pull Requests targeting `main` or `master` will be automatically closed or requested to change targets.
* **Naming Convention:** Pull Requests will only be reviewed if they originate from a branch named `feature/<branch-name>`.
* **Testing:** Ensure your changes do not break existing functionality before submitting your PR.


# Licenses

* Apache-2.0
* MIT
* ISC
* CC-BY-4.0
* MPL-2.0
* BSD-2-Clause
* BSD-3-Clause
* 0BSD
