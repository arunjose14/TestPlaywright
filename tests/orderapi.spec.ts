import { test, expect, Locator, request, APIRequestContext } from "@playwright/test"
import { ApiUtils } from '../utils/ApiUtils';

let apicontext:APIRequestContext;
test.beforeAll(async () => {


    
    apicontext = await request.newContext()
    


});

test("order apis", async ({ page }) => {

const payload = { userEmail: "arun.joseph@gmail.com", userPassword: "Rahulpass@14" }
    const apu = new ApiUtils(apicontext,payload);
    const utoken = await apu.getToken(); 
    const orderpayload = { orders: [{ country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3" }] }
    const orderId=await apu.getOrderid(orderpayload)
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, utoken
    );
    await page.goto("https://rahulshettyacademy.com/client/")

    await page.locator("[routerlink*='/dashboard/myorders']").click();
    await page.locator(".thead-dark").waitFor()
    await page.locator("tbody tr").filter({ hasText: orderId }).getByRole("button", { name: 'View' }).click()

    await page.waitForTimeout(5000)
})