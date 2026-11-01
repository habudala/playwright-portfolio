import{test, expect} from '@playwright/test';


test.describe('Learn assertions', () => {
    test('Verify web page behaviour', async ({page}) => {

        //navigating to specified URL
        await page.goto('https://the-internet.herokuapp.com/');

        // 1. to have URL -> makes sure we landed on the right URL
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

        // 2. to have a title ->makes sure the page has the specified title
        await expect(page).toHaveTitle('The Internet');

        //await page.pause();
    })

    test('Continue with assertions', async ({page}) => {

         //navigating to specified URL
        await page.goto('https://the-internet.herokuapp.com/');

        // assert visibility (of specified element)
        await expect(page.locator('h1')).toBeVisible();

        // assert element to have text
        await expect(page.locator('h2')).toHaveText('Available Examples');

        // assert element contains (partial) text
        await expect(page.locator('body')).toContainText('WYSIWYG');

        //await page.pause();
    })

    test('Continue with assertions part 2' , async ({page}) => {

        //navigate to webpage
        await page.goto('https://the-internet.herokuapp.com/');

        // Assert count (of elements)
        await expect(page.locator('a')).toHaveCount(54);

        // Check/Uncheck check boxes
        await page.goto('https://the-internet.herokuapp.com/checkboxes');

        // explicit waits
       // await page.waitForTimeout(1000);
        //await page.waitForLoadState('networkidle');
        
        //const checkbox = page.getByRole('checkbox').first();
        //await checkbox.waitFor();

        //

        await page.getByRole('checkbox').first().check();
        await page.getByRole('checkbox').nth(1).uncheck();

        // verify check boxes are checked/unchecked
        await expect(page.getByRole('checkbox').first()).toBeChecked();
        await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked();

        //await page.pause();


    })

    test('Continue with assertions part 3' , async ({page}) => {

        //navigate to webpage
        await page.goto('https://the-internet.herokuapp.com/login');

        // have value
        await page.locator('#username').fill('tomsmith');
        await expect(page.locator('#username')).toHaveValue('tomsmith');

        //element is enabled
        await expect(page.locator('button[type="submit"]')).toBeEnabled();

        

    })
})

