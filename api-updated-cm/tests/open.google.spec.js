const{test, expect} = require('@playwright/test');

test('basic test', async ({page}) => {
    await page.goto('https://google.com');
    const name = await page.innerText('title');
    expect(name).toBe('Google');
});