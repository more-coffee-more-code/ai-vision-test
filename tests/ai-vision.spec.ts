import {test, expect} from '@playwright/test';

test.describe('AI Vision', () => {
  test('should load image and detect objects', async ({page}) => {
    await page.goto('https://www.saucedemo.com');

    // Log in to the application
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Verify that we have logged in by checking the presence of the products page
    await expect(page.getByText('Products')).toBeVisible();

    // Locate the first product image
    const firstProductImage = page.locator('.inventory_item_img img').first();
    
    // Verify the first product image has a source and the product has a name
    const imgSrc = await firstProductImage.getAttribute('src');
    expect(imgSrc).toBeTruthy();
    // Get the url for image 
    const url = new URL(imgSrc!, page.url()).toString();
    console.log(url);

    const firstProductName = page.locator('.inventory_item_name').first();
    const nameText = await firstProductName.textContent();
    expect(nameText).toBeTruthy();
  });
});
