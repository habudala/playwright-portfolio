import { test, expect } from '@playwright/test';

test('Successful login (happy path)', async ({ page }) => {
    // navigate to URL
    await page.goto('https://www.saucedemo.com/');
    //ensure you're on the right URL > assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    //click on username field
    await page.locator('[data-test="username"]').click();
    // type in valid user name 'standard_user'
    await page.locator('[data-test="username"]').fill('standard_user');
    //click on password field
    await page.locator('[data-test="password"]').click();
    //type in valid password 'secret_sauce'
    await page.locator('[data-test="password"]').fill('secret_sauce');
    // click on login button
    await page.locator('[data-test="login-button"]').click();
    //ensure you're redirected to the right URL (page) > assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    // ensure expected page element (heading) of the right page > assertion
    await expect(page.locator('.title')).toContainText('Products');
});

test('Login with locked out user (negative test)', async ({page}) => {
     // navigate to URL
    await page.goto('https://www.saucedemo.com/');
    //ensure you're on the right URL > assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    //click on username field
    await page.locator('[data-test="username"]').click();
    // type in locked-out user name 'locked_out_user'
    await page.locator('[data-test="username"]').fill('locked_out_user');
    //click on password field
    await page.locator('[data-test="password"]').click();
    //type in valid password 'secret_sauce'
    await page.locator('[data-test="password"]').fill('secret_sauce');
    // click on login button
    await page.locator('[data-test="login-button"]').click();
    // ensure expected error message is presented to you > assertion
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    
});

test('Login with invalid password (negative test)', async ({page}) => {
    // navigate to URL
    await page.goto('https://www.saucedemo.com/');
    //ensure you're on the right URL > assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    //click on username field
    await page.locator('[data-test="username"]').click();
    // type in valid user name 'standard_user'
    await page.locator('[data-test="username"]').fill('standard_user');
    //click on password field
    await page.locator('[data-test="password"]').click();
    //type in invalid password 'wrong_password'
    await page.locator('[data-test="password"]').fill('wrong_password');
    // click on login button
    await page.locator('[data-test="login-button"]').click();
    // ensure expected error message is presented to you > assertion
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
   
});

test('Successful logout', async ({page}) => {
    // navigate to URL
    await page.goto('https://www.saucedemo.com/');
    //ensure you're on the right URL > assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    //click on username field
    await page.locator('[data-test="username"]').click();
    // type in valid user name 'standard_user'
    await page.locator('[data-test="username"]').fill('standard_user');
    //click on password field
    await page.locator('[data-test="password"]').click();
    //type in valid password 'secret_sauce'
    await page.locator('[data-test="password"]').fill('secret_sauce');
    // click on login button
    await page.locator('[data-test="login-button"]').click();
    //ensure you're redirected to the right URL (page) > assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    // ensure expected page element (heading) of the right page > assertion
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
    // click on the hamburger menu in the upper left corner
    await page.getByRole('button', { name: 'Open Menu' }).click();
    // click on logout button
    await page.locator('[data-test="logout-sidebar-link"]').click(); 
    // make sure you are redirected to the right URL
    await expect(page).toHaveURL('https://www.saucedemo.com/')  
    // check login (element) button is visible on the screen 
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});