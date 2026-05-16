import {test , expect ,Locator } from "@playwright/test"

test('frame1' , async({page})=>
{

await page.goto("https://ui.vision/demo/webtest/frames/")

const frame1= page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
await frame1?.locator("[name='mytext1']").fill("test")

await page.frameLocator("[src='frame_2.html']").locator("[name='mytext2']").fill("frame2")


const frame3= page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
if(frame3)
{
    const innerf=frame3.childFrames()
const radio= innerf[0].locator("[data-value='__other_option__']")
await radio.check()
}
await page.waitForTimeout(5000)
})