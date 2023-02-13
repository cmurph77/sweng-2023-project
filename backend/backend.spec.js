<script axe="node_modules/axe-core/axe.min.js"></script>
// @ts-check


const { test, expect } = require('@playwright/test');
const axe = require('axe-core');




test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

});
test.afterAll(async () => {
    console.log('Done with tests');
    // ...
    axe
      .run()
      .then(results => {
      if (results.violations.length) {
        throw new Error('Accessibility issues found');
      }
      })
  
      .catch(err => {
        console.error('Something bad happened:', err.message);
      });
  
  });
