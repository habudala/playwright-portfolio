import {test, expect} from '@playwright/test';
import {chromium} from 'playwright';

//

let browser;
let context;
let page;

//

test.beforeAll(async () => {
// launch chrome browser betore all tests
    browser = await chromium.launch();
    console.log('BeforeAll hook launched chromium browser');

})

test.beforeEach(async () => {
// create context for browser
context = await browser.newContext();
// create new page
page = await context.newPage();
// navigate to test URL
await page.goto('https://the-internet.herokuapp.com');

console.log('BeforeEach hook launched new page');
// pause execution
//wait page.pause();

})

test.afterEach(async () => {
    // close page and context
    await page.close();
    await context.close();
    console.log('AfterEach hook closed page ');
    //await page.pause();

})

test.afterAll(async () => {
    // close browser
    await browser.close();
    console.log('AfterAll hook closed browser');
})

test( 'A/B Test', async () => {
    await page.click('text="A/B Testing"');
    const header = await page.textContent('h3');
    expect(header === 'A/B Test Control' || header === 'A/B Test Variation 1').toBe(true);
})

test('Checkbox verification', async () => {

    await page.click('text="Checkboxes"');
    const checkbox = await page.isChecked('input[type="checkbox"]:first-child');
    expect(checkbox).toBe(false);
    
})