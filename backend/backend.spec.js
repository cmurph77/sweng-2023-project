const { test, expect } = require('@playwright/test');
const { injectAxe, getAxeResults } = require('axe-playwright');
require('dotenv').config();




test('has title', async ({ page }) => {
  await page.goto(process.env.URL);

});
test.afterAll(async ({ page }) => {
    console.log('Done with tests');
    await injectAxe(page);
    console.log(await getAxeResults(page));
  });