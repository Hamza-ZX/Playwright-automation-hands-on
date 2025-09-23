const {test, expect} = require ("@playwright/test")

test('Basic Date Time', async ({page})=>{

    await page.goto("https://www.automationtesting.co.uk/datepicker.html")
    await page.locator("//input[@id='basicDate']").click()
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Enter');
  
    await page.waitForTimeout(5000)

})

test("Range Date Time", async ({page})=>{

    await page.goto("https://www.automationtesting.co.uk/datepicker.html")
    await page.locator("//input[@id='rangeDate']").click()
    
})