# Playwright Automation Framework

A personal automation testing project built with **Playwright** and **TypeScript** to validate key business workflows for the Atalink platform, including Product Categories, Purchase Orders, and Sales Orders.

This project demonstrates practical automation testing skills, framework design, API testing, and CI/CD integration.

## Features

* End-to-end (E2E) testing
* Regression testing
* UI and API testing
* Cross-browser execution (Chromium, Firefox, WebKit)
* Authentication reuse with `storageState`
* Parallel test execution
* Dynamic and static test data management
* Environment configuration using `.env`
* HTML reporting
* CI/CD integration with GitHub Actions

---

## Tech Stack

* Playwright
* TypeScript
* Node.js
* GitHub Actions
* dotenv
* Playwright HTML Report

---

## Framework Design

The framework follows the **Page Object Model (POM)** design pattern to improve maintainability and reusability.

### Project Structure

```bash
PLAYWRIGHT-CREATE
├── .github/workflows/      # GitHub Actions workflows
├── api_src/                # API helpers and requests
├── Data/                   # Test data files
├── Fixtures/               # Custom fixtures
├── models/                 # Data models and interfaces
├── Pages/                  # Page Object classes
├── playwright/             # Shared utilities
├── tests/
│   ├── API_ProcurementCategory/
│   ├── LogIn/
│   ├── ProcurementCategories/
│   ├── PurchaseOrder/
│   └── SalesOrders/
├── setup.ts                # Authentication setup
├── playwright.config.ts
└── README.md
```

---

## Covered Modules

* Login
* Procurement Categories
* Purchase Orders
* Sales Orders
* Procurement Category API

### Test Scenarios

* Create, Read, Update, Delete (CRUD)
* Search and filter validation
* Form validation
* Business rule verification
* API response validation
* Data consistency checks

---

## Key Implementations

### Authentication Reuse

Implemented `storageState` to reuse authenticated sessions and eliminate repetitive login steps.

### Parallel Execution

Configured parallel test execution to reduce runtime and improve feedback cycles.

### API Testing

Used `APIRequestContext` to:

* Send API requests
* Validate response status and payload
* Prepare test data for UI testing

### Environment Management

Managed multiple environments using `.env` files.

### Reporting

Generated HTML reports for test execution results.

---

## CI/CD

Integrated automated test execution with GitHub Actions.

Workflow includes:

1. Install dependencies
2. Execute Playwright tests
3. Generate HTML reports
4. Upload test artifacts

---

## Getting Started

### Prerequisites

* Node.js 18+
* npm

### Installation

```bash
git clone https://github.com/taoninhthuan085/playwright-Personal-Project.git

cd playwright-Personal-Project

npm install
```

### Install Browsers

```bash
npx playwright install
```

### Run Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/PurchaseOrder
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

View the HTML report:

```bash
npx playwright show-report
```

---

## Repository

https://github.com/taoninhthuan085/playwright-Personal-Project

## Author

**Tô Võ Như Quỳnh**
