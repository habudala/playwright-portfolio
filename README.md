# Playwright Learning Portfolio

A hands-on learning repository documenting my transition from manual software testing to test automation using Playwright and JavaScript.

This repository contains practical exercises and examples created while learning Playwright, exploring its testing capabilities, and developing foundational automation skills.

## Learning Exercises

This section contains practical exercises covering fundamental Playwright concepts and test automation techniques.

### 1. Assertions (`assertions.spec.js`)

Practice with Playwright assertions to verify page URLs, titles, element visibility, text content, element counts, checkbox states, input values, and element enabled states.

### 2. Codegen Login (`codegen_login.spec.js`)

A login test generated using Playwright Codegen. Practice reviewing, understanding, and refining automatically generated test code, including locators, user interactions, and assertions.

### 3. Login Test (`login.spec.js`)

A guided login and logout test demonstrating CSS selectors, role-based locators, text matching, and assertions to verify successful authentication and logout.

### 4. Selectors (`selectors.spec.js`)

Practice locating and interacting with page elements using different CSS selectors and Playwright locator methods, including ID, class, attribute, text, and role-based selectors.

## Technologies Used

- JavaScript
- Playwright Test
- Node.js
- Visual Studio Code




## Installation

Clone the repository and install its dependencies:

```bash
npm install
```




## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/learning-exercises/login.spec.js
```

View the HTML test report:

```bash
npx playwright show-report
```