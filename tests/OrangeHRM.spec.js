const {test, expect} = require ('@playwright/test')

test.describe('Login Module', async ()=>{

test.beforeEach('Routing Login Page', async ({page})=>{

      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})


test('Sucessful Login', async ({page})=>{

    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")).toBeVisible()
    
})

test('Unsucessful Login', async ({page})=>{
    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//h5[@class='oxd-text oxd-text--h5 orangehrm-login-title']")).toBeVisible()
})

test('Unsucessful Login (Empty fields', async ({page})=>{
    

    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//div[@class='orangehrm-login-slot-wrapper']//div[1]//div[1]//span[1]")).toBeVisible()

})

})

test.describe('Apply for Leave', async () =>{

    test.beforeEach('Routing Request Leave Page', async ({page})=>{

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.locator("//input[@placeholder='Username']").fill("Admin")
        await page.locator("//input[@placeholder='Password']").fill("admin123")
        await page.locator("//button[@type='submit']").click()
        await page.locator("//button[@title='Assign Leave']//*[name()='svg']").click()

    })

    test('Sucessful Assign Leave', async ({page})=>{
        await page.locator("//input[@placeholder='Type for hints...']").focus()
        await page.keyboard.press("R");
        await expect(page.getByText('Ravi M B')).toBeVisible();
        await page.getByText("Ravi M B", {exact: true}).click();
        await page.locator("//div[@class='oxd-select-text-input']").click()
        await page.getByText("CAN - Bereavement", { exact: true }).click();

        await page.locator("//div[@class='oxd-grid-4 orangehrm-full-width-grid']//div[1]//div[1]//div[2]//div[1]//div[1]//i[1]").click()
        await page.locator("//div[@class='oxd-calendar-selector-year-selected']//i[@class='oxd-icon bi-caret-down-fill oxd-icon-button__icon']").click();
        await page.getByText("2024", { exact: true }).click();
        await page.locator("//div[@class='oxd-calendar-selector-month-selected']//i[@class='oxd-icon bi-caret-down-fill oxd-icon-button__icon']").click();
        await page.getByText("November", {exact: true}).click();
        await page.locator("//div[contains(text(),'15')]").click();

        
    })

})
