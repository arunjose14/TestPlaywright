
import {test , expect ,Locator} from "@playwright/test"

test("locator filter 2", async ({ page }) => {



    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await page.getByPlaceholder("email@example.com").fill("arun.joseph@gmail.com")
    await page.getByPlaceholder("enter your passsword").fill("Rahulpass@14")
    await page.getByRole("button", { name: 'Login' }).click()

    await page.locator(".card").filter({ hasText: 'ADIDAS ORIGINAL' }).getByRole("button", { name: ' Add To Cart' }).click()
    await page.locator("[routerlink*='cart']").click()
    const avail = page.locator("h3:has-text('ADIDAS ORIGINAL')")
    await expect(avail).toBeVisible()
    await page.locator("text='Checkout'").click();
    await page.locator("//div[contains(text(),'CVV Code ')] /following-sibling::input").fill("223");
    await page.locator("//div[contains(text(),'Name on Card ')] /following-sibling::input").fill("Arun");
    await page.locator("[placeholder='Select Country']").pressSequentially("ind")
    await page.locator("(//span[contains(text(),' India')])[2]").click()
    await expect(page.locator('.user__name label')).toHaveText("arun.joseph@gmail.com")
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")

    const raworderid = await page.locator(".em-spacer-1 .ng-star-inserted").innerText()
    await page.locator("label[routerlink*='/dashboard/myorders']").click();


    const orderid = raworderid.replace("|", "").replace(" ", "").replace(" ", "").replace("|", "")
    await page.locator(".thead-dark").waitFor()
    await page.locator("tbody tr").filter({ hasText: orderid }).getByRole("button", { name: 'Delete' }).click()

    await page.waitForTimeout(5000)
})