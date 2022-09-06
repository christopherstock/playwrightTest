import { test, expect } from '@playwright/test';

test('Mayflower Homepage - Menu Link "Stellenangebote"', async ({ page }) => {

    // open Mayflower homepage and assert title
    await page.goto('https://www.mayflower.de/');
    await expect(page).toHaveTitle(/Agile Teams für moderne Softwareentwicklung - Mayflower GmbH/);

    // get locator for menu link 'Stellenangebote' and assert href attribute
    const jobsLink = page.locator('text=Stellenangebote');
    await expect(jobsLink).toHaveAttribute('href', 'https://mayflower.de/karriere/');
    await expect(jobsLink).toBeVisible();

    // click 'Stellenangebote' link and assert new URL and new title
    await jobsLink.click();
    await expect(page).toHaveURL(/.*\/karriere/);
    await expect(page).toHaveTitle(/Aktuelle Stellenangebote bei Mayflower - Mayflower GmbH/);

    // get locator on headline
    const headline = page.locator('id=opening-party-1');
    await expect(headline).toHaveText('The best gift is you');
});
