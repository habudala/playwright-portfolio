import{test, expect} from '@playwright/test';

test('This is a login test',async ({page}) => {
// navigate to URL
await page.goto('https://the-internet.herokuapp.com/login');
// find & click username field
await page.locator('#username').click();
// enter (correct) value into username field 
await page.locator('#username').fill('tomsmith');
// find & click password field
await page.locator('#password').click();
// enter (correct) password value in field
await page.locator('#password').fill('SuperSecretPassword!');
// find & click login button
await page.getByRole('button',{name:/login/i}).click();
// make sure you're redirected to the secure login screen by checking element presence
await expect(page.locator('.flash')).toContainText('You logged into a secure area!');
// again make sure you're redirected to the secure login screen by checking another element presence
await expect(page.locator('h4.subheader')).toContainText('Welcome to the Secure Area. When you are done click logout below.');
// find & click logout button
await page.locator('a.button.secondary.radius:has-text("Logout")').click();
//ensure you're logged out by checking for logout screen element presence
await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
//await page.pause();
})