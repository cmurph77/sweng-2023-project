import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
});

test.afterAll(async () => {
    console.log('Done with tests');
});