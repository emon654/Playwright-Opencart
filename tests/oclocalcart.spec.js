import {test, expect} from '@playwright/test'

test('adding item checking out', async ({page}) => {
    await page.goto('http://localhost/Opencart/upload');

    console.log(process.env.user);
    console.log(process.env.password);




})