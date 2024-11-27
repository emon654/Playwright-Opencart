import {test, expect} from '@playwright/test';

test('testing login', async ({page}) => { 
    await page.goto('https://naveenautomationlabs.com/opencart/');
    await page.locator('xpath=//*[@id="top-links"]/ul/li[2]/a').click();

    await page.locator('xpath=//*[@id="top-links"]/ul/li[2]/ul/li[2]/a').click();
    await page.getByPlaceholder('E-Mail Address').fill('test@systemizepro.com');
    await page.getByPlaceholder('Password').fill('test');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#content').getByRole('heading', { name: 'My Account' })).toHaveText('My Account'); 

    page.close();





}
)