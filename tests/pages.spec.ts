import{test,Locator ,chromium} from "@playwright/test"
import console from "console"

test("newtabs",async()=>
{

const browser=await chromium.launch()
const context =  await browser.newContext()
const parentpage = await context.newPage()
await parentpage.goto("https://testautomationpractice.blogspot.com/")



const [childpage] =await Promise.all([context.waitForEvent('page'),await parentpage.locator("[onclick='myFunction()']").click()])


const pages=context.pages()
console.log(await childpage.title())
await parentpage.waitForTimeout(3000)
await parentpage.bringToFront(); 
await parentpage.waitForTimeout(3000)
await parentpage.locator("#alertBtn").click()


})