# Playwright-Automation-Hands-On

In this repository, I’ll be sharing automation scripts built with **[Playwright](https://playwright.dev/)**.  
The goal is to provide hands-on examples that cover different aspects of automation testing, including:  

- ✅ **End-to-End (E2E) Testing**  
- ♿ **Accessibility Testing**  
- 🧩 **Component Testing**  
- 🌐 **API Testing**  

For practice and demonstration purposes, we’ll be using the **OrangeHRM demo application**:  
🔗 [OrangeHRM Demo Site](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

---

## 📦 Getting Started

setup:
  - step: Clone the Repository
    commands: |
      git clone https://github.com/<your-username>/Playwright-Automation-Hands-On.git
      cd Playwright-Automation-Hands-On

  - step: Install Dependencies
    note: Make sure you have Node.js installed (v16 or later recommended).
    commands: |
      npm init -y
      npm install @playwright/test

  - step: Install Browsers
    note: Playwright provides a CLI to install required browsers.
    commands: |
      npx playwright install

running_tests:
  - step: Run All Tests
    command: npx playwright test

  - step: Run a Specific Test File
    command: npx playwright test tests/example.spec.js

  - step: Run Tests in UI Mode (Interactive Mode)
    command: npx playwright test --ui

  - step: Run Tests in Headed Mode (with Browser UI)
    command: npx playwright test --headed

project_structure: |
  Playwright-Automation-Hands-On/
  │── tests/
  │   ├── e2e/
  │   ├── accessibility/
  │   ├── components/
  │   ├── api/
  │── playwright.config.js
  │── package.json
  │── README.md

additional_notes: |
  - All examples will be written using the Playwright Test Runner.
  - Configurations (like browsers, retries, and reports) can be managed in `playwright.config.js`.
  - Best practices such as Page Object Model (POM) and modular test design will be demonstrated.

goals: |
  - To provide a hands-on guide for beginners learning Playwright.
  - To demonstrate real-world test automation scenarios on OrangeHRM.
  - To cover multiple types of testing under one framework.
