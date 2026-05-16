import {test,expect, Locator } from "@playwright/test"



test("Verify locators ",async ({page})=>{

    await page.goto("https://demo.nopcommerce.com/");
  const logo:Locator=  page.getByAltText("nopCommerce demo store");
//   await logo.click();
  await expect(logo).toBeVisible();

  await expect(page.getByText("Welcome to")).toBeVisible();
  await page.getByRole('button',{name:/add to cart/i}).first().click({ force: true });
  await expect(page.getByRole('heading',{name:/Build your own computer/i})).toBeVisible();
  await page.locator(".search-box-text").fill("test");
  await page.waitForTimeout(3000);
  await page.locator("[placeholder='Search store']").fill("2222 test");
  await page.locator('#pollanswers-1').check();
  expect(page.locator('#pollanswers-1').isChecked());
await page.waitForTimeout(5000);
})

test.only('actions' , async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
// await page.getByLabel('Sunday').check();
await page.locator('//select[@id="colors"]').selectOption(['Red','Green'])

// for(const box of boxes)
// {
// const values= await box.innerText()
// console.log(values)
// if(values==="Green")
// {
//   await box.click()
// }
// }
await page.waitForTimeout(3000);
})


// 3 
test('actions3' , async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
// await page.getByLabel('Sunday').check();
const boxes = await page.locator('//input[@class="form-check-input" and @type="checkbox"]').all()

const index =[1,3,6]

for(const i of index)
{
 await boxes[i].check()
}
await page.waitForTimeout(5000);
})

test('actions4' , async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
// await page.getByLabel('Sunday').check();
const boxes = await page.locator('//input[@class="form-check-input" and @type="checkbox"]').all()

const label ="Friday"

const checkbox = page.getByLabel(label)
await checkbox.check()
await page.waitForTimeout(5000);
})
