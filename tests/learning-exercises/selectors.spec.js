import {test, expect} from 'playwright/test'

test("Learning selectors" , async ({page}) => {
// navigate to the webpage

await page.goto('http://127.0.0.1:5500/test-pages/clickme.html');

// 1 Selecting by ID
await page.locator('#clickButton').click();
await expect(page.locator('#counter')).toContainText('1');

// 2 Selecting by Class
await page.locator('.button-style').click();
await expect(page.locator('#counter')).toContainText('2');

// 3 Selecting by Tag and Class
await page.locator('button.button-style').click();
await expect(page.locator('#counter')).toHaveText('3');

// 4 Selecting by Attribute value
await page.locator('[data-action="increment"]').click();
await expect(page.locator('#counter')).toHaveText('4');

await page.locator('[class="button-style"]').click();
await expect(page.locator('#counter')).toHaveText('5');

await page.locator('[id="clickButton"]').click();
await expect(page.locator('#counter')).toHaveText('6');

//await page.pause();
// 5 Selecting by partial Attribute value
await page.locator('[role*="but"]').click();
await expect(page.locator('#counter')).toContainText('7');

// 6 Selecting by text content
await page.locator('text=CLICK ME').click();
await expect(page.locator('#counter')).toContainText('8');

// 7 Combine selectors for precision Class and (exact) Text
await page.locator('.button-style:text("CLICK ME")').click();
await expect(page.locator('#counter')).toContainText('9');

//8 combine seletors for percision Tag + (partial) Text
await page.locator('button:has-text("Click m")').click();
await expect(page.locator('#counter')).toContainText('10')
//await page.pause();

// Playwright selectors


// 9 Get by Text
await page.getByText('CLICK ME').click();
await expect(page.locator('#counter')).toContainText('11')

// 10 Get by Role & Text
await page.getByRole('button', { name: 'CLICK ME' }).click();
await expect(page.locator('#counter')).toContainText('12');

await page.getByRole('button', {name:/click me/i}).click();
//await page.pause();

// final test to ensure all cases have passed
await expect(page.locator('#counter')).toContainText('13');

})