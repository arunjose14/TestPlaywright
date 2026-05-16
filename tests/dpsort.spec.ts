import {test,expect, Locator } from "@playwright/test"





test('@WEB dropdown find duplicates' , async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
const oglist =  await page.locator('//select[@id="colors"]/option').allInnerTexts()
const myset = new Set<string>()
const dupes = []


for(const text of oglist)
{
    if(myset.has(text))
    {
        dupes.push(text)
    }
    else
    {
        myset.add(text)
    }
}



console.log("Orginal  list",myset)
console.log("Dups  list",dupes)

})
