import { test, expect } from '@playwright/test';

test('Mayflower Homepage - Menu Link "Stellenangebote"', async ({ page }) => {
    await page.goto('https://www.mayflower.de/');

    // assert title
    await expect(page).toHaveTitle(/Agile Teams für moderne Softwareentwicklung - Mayflower GmbH/);

    // get menu link 'Stellenangebote'
    const jobsLink = page.locator('text=Stellenangebote');

    // expect href attribute exact value
    await expect(jobsLink).toHaveAttribute('href', 'https://mayflower.de/karriere/');

    // click 'Stellenangebote' link
    await jobsLink.click();

    // expect URL to match
    await expect(page).toHaveURL(/.*\/karriere/);
});
