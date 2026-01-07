import {test, expect} from '@playwright/test';
import {auto} from 'auto-playwright/dist';


test.describe('AI Vision', () => {
  test('should load image and detect objects', async ({page}) => {
    await page.goto('https://www.saucedemo.com');

    // Log in using auto-playwright (NLP)
    await auto('Type "standard_user" into the username field', {page, test});
    await auto('Type "secret_sauce" into the password field', {page, test});
    await auto('Click the login button', {page, test});

    // Verify that we have logged in by checking the presence of the products page
    await expect(page.getByText('Products')).toBeVisible();

    // Use auto-playwright (NLP) to click the first product image
    await auto('Click the first product image on the products list', {page, test});

    // Verify product details page opened by checking the product title
    const productTitle = page.locator('.inventory_details_name');
    await expect(productTitle).toBeVisible();
  });
});
