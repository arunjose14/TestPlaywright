import {test,expect, Locator } from "@playwright/test"

test("static table", async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/")
const table:Locator=page.locator("#taskTable tbody");
const rows:Locator[]=await table.locator("tr").all();
let value;
for (const r of rows)
{
    const taskname = await r.locator('td').nth(0).innerText()
    if(taskname==="Chrome")
    {
value=await r.locator('td',{hasText:'Mbps'}).innerText()
break;
    }
}
console.log(value)
await page.waitForTimeout(4000)
const stringcpuvalue = await page.locator(".chrome-network").innerText()
const actualcpuvalue = Number(stringcpuvalue);
const gotcpuvalue = Number(value)
await expect(actualcpuvalue).toBe(gotcpuvalue)
})