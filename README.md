# PlaywrightTest
![Playwright](img/logo-playwright.png)

First steps with Playwright:<br>
https://playwright.dev/docs/intro

Writing Tests:<br>
https://playwright.dev/docs/writing-tests

# Install Node.js Playwright Sceleton
Enter an empty directory and type:
```
npm init playwright@latest
```
This will ask for some basic config settings and then create the Playwright Sceleton with some example tests.

# Run Tests
Performs all tests inside directory `tests`.
```
npx playwright test
```

# View Test Report
The test report is generated after the test run
in HTML format in directory `playwright-report`.
```
npx playwright show-report
```

# Run Tests Headed
Run all tests inside directory `tests` and display browser windows.
```
npx playwright test --headed
```

To run all tests only in one specific browser:
```
npx playwright test --headed --project=chromium
```

# Debug Tests
Run all tests with debugger support ("Playwright Inspector"):
```
npx playwright test --debug
```

# IDE Plugins
VS Code (free)
https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

IntelliJ (30 day trial)
https://plugins.jetbrains.com/plugin/18100-maestro
