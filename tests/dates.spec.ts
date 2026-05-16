import { test, expect, Locator } from "@playwright/test"

test("drp down date", async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/')
    const dateinp = page.locator("#txtDate")
    await dateinp.click()
    const tdate = "14"
    const tmnth = "Feb"
    const tyear = "2016"


    const yrdrp = page.locator(".ui-datepicker-year")
    await yrdrp.selectOption(tyear)

    const monthdrpdwn = page.locator(".ui-datepicker-month")
    await monthdrpdwn.selectOption(tmnth)

    const datecells = await page.locator(".ui-datepicker-calendar td").all()

    for (const date of datecells) {
        const dtext = await date.innerText()
        if (dtext == tdate) {
            await date.click()
            break;
        }
    }



    await expect(dateinp).toHaveValue("14/02/2016")
    //await page.waitForTimeout(5000)
})

test.only("past date", async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/')
    const dateinp = page.locator("#datepicker")
    await dateinp.click()
    const tdate = "14"
    const tmnth = "February"
    const tyear = "2016"


    const year = page.locator(".ui-datepicker-year")
    const month = page.locator(".ui-datepicker-month")

    while (true) {

        if (await year.innerText() === tyear && await month.innerText() === tmnth) 
        {

            const datecells = await page.locator(".ui-datepicker-calendar td").all()

            for (const date of datecells) {
                const dtext = await date.innerText()
                if (dtext == tdate) {
                    await date.click()
                    break;
                }
            }
         break;
        }
        else {
            await page.locator(".ui-datepicker-prev").click()
        }


    }




    await expect(dateinp).toHaveValue("02/14/2016")
    //await page.waitForTimeout(5000)
})