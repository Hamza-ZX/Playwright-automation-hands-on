const {test, expect} = require ('@playwright/test');

test.describe('Basic Test Cases', ()=>{

test('Testing form fields', async ({page})=>{

   await page.goto("https://practicetestautomation.com/practice-test-login/");
   const isVisible = await page.locator("//button[@id='submit']").isVisible();
   console.log(isVisible);
   if(isVisible){
    await page.locator("//input[@id='username']").fill("student")
   // await page.locator("//input[@placeholder='Password']").focus()
    await page.locator("//input[@id='password']").fill("Password123")
    await expect(page.locator("//input[@id='password']")).toBeEnabled()
   }
})

test('Checkfields', async ({page})=>{

   await page.goto("https://practice.expandtesting.com/checkboxes");
   await page.locator("//input[@id='checkbox1']").check();
   await expect(page.locator("//input[@id='checkbox2']")).toBeChecked()
})

test('Upload file as Input', async ({page})=>{
await page.goto("https://qa-automation-practice.netlify.app/file-upload.html");
await page.locator("//input[@id='file_upload']").setInputFiles("image.png")

})

test('Double click on button', async ({page})=>{
await page.goto("https://qa-automation-practice.netlify.app/double-click")

await page.locator("//button[@id='double-click-btn']").dblclick()

await expect(page.locator("//div[@id='double-click-result']")).toBeVisible()
})

})

test.describe("Handling Dropdowns", ()=>{

   test('Simple dropdown', async ({page})=>{
      await page.goto("https://qa-automation-practice.netlify.app/dropdowns");
      await page.locator("//select[@id='dropdown-menu']").selectOption('Pakistan')
   })

   test('Multi dropdown', async ({page})=>{
      await page.goto("https://qa-automation-practice.netlify.app/dropdowns");
      await page.locator("//button[@id='multi-level-dropdown-btn']").click()
      await page.locator("//a[normalize-space()='Hover me for more options']").hover()
      await page.locator("//a[normalize-space()='Second level - 2']").click()
      //await page.locator("//a[normalize-space()='Some action']").click()
   })
})



