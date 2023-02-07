import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('tcd blackboard');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Blackboard https://tcd.blackboard.com' }).click();
  await page.getByRole('button', { name: 'Trinity College Dublin Blackboard Logo ► Click Here to Log In' }).click();
});