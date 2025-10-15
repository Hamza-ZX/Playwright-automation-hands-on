const { test, expect } = require('@playwright/test');

const ExtractNumber = (Label) =>{
var Number = "";

for (var i = 0; i<Label.length; i++){
  if (Label[i] >=0 && Label[i] <= 9){
    Number+=Label[i]
  }
}
  return Number;
}

const random = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};


test.describe('Test Suite', ()=> {

test.beforeEach('Login', async ({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator("//input[@placeholder='Username']").fill('Admin');
  await page.locator("//input[@placeholder='Password']").fill('admin123');
  await page.locator("//button[@type='submit']").click();
})

test('My Leaves Module', async ({ page }) => {

await page.locator("//button[@title='My Leave']//*[name()='svg']//*[name()='g' and contains(@fill,'currentCol')]//*[name()='path' and contains(@class,'cls-1')]").click()
await page.locator("//div[@class='oxd-grid-4 orangehrm-full-width-grid']//div[1]//div[1]//div[2]//div[1]//div[1]//i[1]").click()
await page.locator("//div[contains(text(),'16')]").click()
await page.locator("//span[normalize-space()='Rejected']//i[@class='oxd-icon bi-x --clear']").click()
const Visible = await page.locator("//span[normalize-space()='Rejected']//i[@class='oxd-icon bi-x --clear']").isVisible()

if(!Visible){
console.log("Rejected Label is sucessfully hidden once we click on cross")
}

await page.locator("//div[contains(text(),'-- Select --')]").click()
await page.getByText("US - Personal", {exact: true}).click()
await page.waitForTimeout(1000)
});

test('TimeSheet Module' , async ({page})=>{
await page.locator("//button[@title='Timesheets']//*[name()='svg']//*[name()='g' and contains(@fill,'currentCol')]//*[name()='g'][1]").click()
await page.locator("//input[@placeholder='Type for hints...']").click();
var Name = await page.locator("//div[@role='table']//div[1]//div[1]//div[1]//div[1]").textContent()

for(var i = 0; i<Name.length; i++){
  await page.keyboard.press(Name[i])
}

await page.waitForTimeout(3000)
await page.keyboard.press("ArrowDown")
await page.keyboard.press("Enter")
await page.locator("//button[@type='submit']").click()
var isBtnVisible = await page.locator("//button[normalize-space()='Create Timesheet']").isVisible();

if(isBtnVisible){
await page.locator("//button[normalize-space()='Create Timesheet']").click()
}

await page.waitForTimeout(2000)
})

test ('Searching the Record', async ({page})=>{

await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click()

var id = await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[2]").textContent()
await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/input").fill(id);

await page.locator("//button[@type='submit']").click()
var RecordNo = await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/span").textContent()
await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[1]/div").click()
await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/div/button").click()

await page.locator("//*[@id='app']/ßdiv[3]/div/div/div/div[3]/button[2]").click()
await page.waitForTimeout(2000)

})

test('Adding Custom Fields', async ({page})=>{

await page.locator("//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a").click()
await page.locator("//span[@class='oxd-topbar-body-nav-tab-item']").click()
await page.locator("//li[@class='--active oxd-topbar-body-nav-tab --parent']//li[2]").click()

var RecordText = await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/div[2]/div/span").textContent()
var NoOfrecords = ExtractNumber(RecordText);

await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/div[1]/button").click()
await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/input").fill(random())
await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div").click()
await page.keyboard.press("ArrowDown")
await page.keyboard.press("Enter")

await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div/div/div[2]/div").click()
await page.keyboard.press("ArrowDown")
await page.keyboard.press("Enter")
await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]").click()
await page.waitForTimeout(1000)

var newNumber = await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/div[2]/div/span").textContent()
newNumber = ExtractNumber(newNumber);

if(parseInt(newNumber,10)-1 == parseInt(NoOfrecords,10)){
  console.log("Test Case Passed: When Delete 1 record, The total Record subtracts by 1")
}

await page.waitForTimeout(3000)

})

test ('Submit Claim', async ({page}) => {

await page.locator("//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[11]").click()
await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div[2]/div[1]/button").click()
await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/div/div/input").click()
await page.keyboard.press("A")
await page.waitForTimeout(2000)
await page.keyboard.press("ArrowDown")
await page.keyboard.press("Enter")

await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/div").click()
await page.keyboard.press("ArrowDown")
await page.keyboard.press("Enter")

await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/div").click()
await page.keyboard.press("ArrowDown")
await page.keyboard.press("Enter")

await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div/div/div[2]/textarea").fill(random())
await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[4]/button[2]").click()

await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/div[2]/div/button").click()
await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/div[6]/div/div/div/form/div[1]/div/div/div/div[2]/div").click()
await page.keyboard.press("A")
await page.waitForTimeout(2000)
await page.keyboard.press("ArrowDown")
await page.keyboard.press("Enter")

await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/div[6]/div/div/div/form/div[2]/div/div[1]/div/div[2]/div/div").click()
await page.getByText("9", {exact:true}).click()

await page.locator("//body/div[@id='app']/div[@class='oxd-layout orangehrm-upgrade-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']/div[@class='orangehrm-background-container']/div[@class='orangehrm-paper-container']/div[@role='dialog']/div[@class='oxd-dialog-container-default']/div[@class='oxd-dialog-container-default--inner']/div[@role='document']/form[@class='oxd-form']/div[@class='oxd-form-row']/div[@class='oxd-grid-2 orangehrm-full-width-grid']/div[@class='oxd-grid-item oxd-grid-item--gutters']/div[@class='oxd-input-group oxd-input-field-bottom-space']/div/input[1]").fill("25.5")
await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/div[6]/div/div/div/form/div[3]/div/div/div/div[2]/textarea").fill("ghjghj")
await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/div[6]/div/div/div/form/div[4]/button[2]").click()

console.log(await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/div[3]/div/span").textContent())

await page.waitForTimeout(3000)

})

test("Adding Post", async ({page}) => {

  await page.getByText("Buzz", {exact: true}).click()
  var comment = "Hey! This is Hamza's Testing."
  await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/form/div/textarea").fill(comment)
  await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/form/div/div/button").click()
  var AddedComment = await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div/div[3]/div[1]/div/div[2]/div/p[1]").textContent()

  expect(comment).toEqual(AddedComment)
  await page.waitForTimeout(3000)

})

test.only("Edit Post", async ({page}) => {

  await page.getByText("Buzz", {exact: true}).click()
  var comment = "Hey! Let's Edit this comment."
  await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/form/div/textarea").fill(comment)
  await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[2]/button[1]").click()

  await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div/form/div[2]/div[1]/div[2]/input").setInputFiles('img.png')
  await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div/form/div[3]/button").click()

  var AddedComment = await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div/div[3]/div[1]/div/div[2]/div/p[1]").textContent()
  await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div/div[3]/div[1]/div/div[1]/div/div[2]/li/button").click()
  await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div/div[3]/div[1]/div/div[1]/div/div[2]/li/ul/li[2]/p").click()
  await page.locator("//*[@id='Buzz Newsfeed']/div[2]/div/div/div/form/div[1]/div[2]/div/button").click()

  await page.waitForTimeout(3000)
})

test("Scrapping Posts Data", async ({page}) => {
  var posts = await page.$$(".oxd-grid-1 orangehrm-buzz-newsfeed-posts")
  for(var i = 0; i<posts.length; i++){
    await console.log(posts[i].textContent())
}

})



})


