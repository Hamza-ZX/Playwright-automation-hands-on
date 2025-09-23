const { test, expect } = require('@playwright/test');

test.describe('Test Suite', ()=>{

test('Successful Login', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.locator("//input[@placeholder='Username']").fill('Admin');
  await page.locator("//input[@placeholder='Password']").hover()
  await page.locator("//input[@placeholder='Password']").fill('admin123');
  await page.locator("//button[@type='submit']").click();
  //await page.getByRole('link', {name: 'get Started'}).nth(0).click()
});

test('Unsucessful Login: Wrong Password', async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  await page.locator("//input[@placeholder='Username']").fill('Admin');
  await page.locator("//input[@placeholder='Password']").fill('fgkbmfg');
  await page.locator("//button[@type='submit']").click();
  await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").toBeVisible();

})


test('Login text visiblity', async ({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await expect(page.locator("//h5[@class='oxd-text oxd-text--h5 orangehrm-login-title']")).toBeVisible();
})

})




