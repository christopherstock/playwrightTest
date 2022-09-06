import { test, expect } from '@playwright/test';

test.describe("Mayflower Homepage", () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.mayflower.de/');
    });

    test.describe("Menu Links", () => {

        test('Karriere', async ({ page }) => {

            await expect(page).toHaveTitle(/Agile Teams für moderne Softwareentwicklung - Mayflower GmbH/);

            const jobsLink = page.locator('text=Stellenangebote');
            await expect(jobsLink).toHaveAttribute('href', 'https://mayflower.de/karriere/');
            await expect(jobsLink).toBeVisible();

            await jobsLink.click();
            await expect(page).toHaveURL(/.*\/karriere/);
            await expect(page).toHaveTitle(/Aktuelle Stellenangebote bei Mayflower - Mayflower GmbH/);

            const headline = page.locator('id=opening-party-1');
            await expect(headline).toHaveText('The best gift is you');
            await expect(headline).toHaveCSS('font-weight', '700');
        })

        test('Trainings & Workshops', async ({ page }) => {

            const jobsLink = page.locator('text=Trainings & Workshops');
            await expect(jobsLink).toHaveAttribute('href', 'https://mayflower.de/trainings/');
            await expect(jobsLink).toBeVisible();

            await jobsLink.click();
            await expect(page).toHaveURL(/.*\/trainings/);
        })

        test('Impressum', async ({ page }) => {

            const jobsLink = page.locator('text=Impressum');
            await expect(jobsLink).toHaveAttribute('href', 'https://mayflower.de/impressum/');
            await expect(jobsLink).toBeVisible();

            await jobsLink.click();
            await expect(page).toHaveURL(/.*\/impressum/);
        })
    })
});
