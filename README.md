# PlaywrightTest
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
