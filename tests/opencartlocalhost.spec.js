import {test, expect} from '@playwright/test';

test('testing localhost register', async ({page}) => {
    await page.goto('http://localhost/Opencart/upload/');
    await page.locator('xpath=//*[@id="top"]/div/div[2]/ul/li[2]/div/a/span').click();
    await page.locator('xpath=//*[@id="top"]/div/div[2]/ul/li[2]/div/ul/li[1]/a').click();
    await page.locator('xpath=//*[@id="input-firstname"]').fill('Systemize');
    await page.locator('xpath=//*[@id="input-lastname"]').fill('pro');
    await page.locator('xpath=//*[@id="input-email"]').fill('test@systemizepro.com');
    await page.locator('xpath=//*[@id="input-password"]').fill('test');
    await page.locator('xpath=//*[@id="form-register"]/div/div/input').click();
    await page.locator('xpath=//*[@id="form-register"]/div/button').click();

    page.close();

}
)