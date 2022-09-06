import { test, expect } from '@playwright/test';

test.describe("Mayflower Homepage", () => {

    test.beforeEach(async ({ page }) => {

        // open Mayflower homepage
        await page.goto('https://www.mayflower.de/');
    });

    test.describe("Menu Links", () => {

        test('Stellenangebote', async ({ page }) => {

            // assert page title
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
            await expect(headline).toHaveCSS('font-weight', '700');
        })

        test('Trainings & Workshops', async ({ page }) => {

            // get locator for menu link 'Stellenangebote' and assert href attribute
            const jobsLink = page.locator('text=Trainings & Workshops');
            await expect(jobsLink).toHaveAttribute('href', 'https://mayflower.de/trainings/');
            await expect(jobsLink).toBeVisible();

            // click 'Stellenangebote' link and assert new URL and new title
            await jobsLink.click();
            await expect(page).toHaveURL(/.*\/trainings/);
        })

        test('Impressum', async ({ page }) => {

            // get locator for menu link 'Stellenangebote' and assert href attribute
            const jobsLink = page.locator('text=Impressum');
            await expect(jobsLink).toHaveAttribute('href', 'https://mayflower.de/impressum/');
            await expect(jobsLink).toBeVisible();

            // click 'Stellenangebote' link and assert new URL and new title
            await jobsLink.click();
            await expect(page).toHaveURL(/.*\/impressum/);
        })
    })
});
