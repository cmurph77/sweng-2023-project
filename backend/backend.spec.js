const { test, expect } = require('@playwright/test');
const { injectAxe, getAxeResults } = require('axe-playwright');




test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

});
test.afterAll(async ({ page }) => {
    console.log('Done with tests');
    await injectAxe(page);
    console.log(await getAxeResults(page));
  });