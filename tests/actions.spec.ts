import {test,expect, Locator } from "@playwright/test"



test('@WEB actions' , async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
// await page.getByLabel('Sunday').check();
const boxes =  await page.locator('//select[@id="colors"]/option').allInnerTexts()
// const values = await boxes.allInnerTexts()

for(const box of boxes){
console.log(box)
}
})