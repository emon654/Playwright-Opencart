import {test, expect} from '@playwright/test'

test('testing login', async ({page}) => {
    await page.goto('http://localhost/Opencart/upload');
    await page.locator('css=#top > div > div.nav.float-end > ul > li:nth-child(2) > div > a > span').click();
    await page.locator('css=#top > div > div.nav.float-end > ul > li:nth-child(2) > div > ul > li:nth-child(2) > a').click();
    await page.locator('css=#input-email').fill('test@systemizepro.com');
    await page.locator('css=#input-password').fill('test');
    await page.locator('css=#form-login > div.text-end > button').click();

    await expect(page.locator('xpath=//*[@id="content"]/h2[1]')).toHaveText('My Account');
    page.close();

}
)