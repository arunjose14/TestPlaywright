import {test,expect,Locator} from "@playwright/test"

test("simple alert",async ({page})=>
{


    await page.goto("https://testautomationpractice.blogspot.com/")
page.on('dialog', (dialog)=>{
dialog.dismiss()
console.log(dialog.message())
})


//await page.locator("#alertBtn").click()

await page.locator("#confirmBtn").click()
//await page.locator("#promptBtn").click()

await page.waitForTimeout(5000)


})