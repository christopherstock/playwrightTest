import { test, expect } from '@playwright/test';

test('homepage of Mayflower has expected Title', async ({ page }) => {
  await page.goto('https://www.mayflower.de/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Agile Teams für moderne Softwareentwicklung - Mayflower GmbH/);

  // create a locator
  // const getStarted = page.locator('text=Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  // await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  // await getStarted.click();

  // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
});
