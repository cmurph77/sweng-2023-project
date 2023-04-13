<script src="node_modules/axe-core/axe.min.js"></script>
// @ts-check
const { test, expect } = require('@playwright/test');
//const axe = require('axe-core');
const { injectAxe, getAxeResults } = require('axe-playwright');
const fs = require('fs');

test('has title', async ({page}) => {
  const url = fs.readFileSync(require.resolve("../url.txt"), 'utf-8');
  await page.goto(url);
});
test.afterAll(async ( { page }) => {
  
  console.log('Done with tests');
  await injectAxe(page);   // runs the axe core tests
  console.log(await getAxeResults(page)); // logs the results to the page. The getAxeResults function returns an array of accessibility issues found on the page, 

  
});

