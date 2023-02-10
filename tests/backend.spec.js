import { test, expect } from '@playwright/test';
const AxeCore = require()

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
});

test.afterAll(async () => {
    
});