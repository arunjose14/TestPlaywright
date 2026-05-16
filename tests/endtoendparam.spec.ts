import { test, expect, Locator } from "@playwright/test"
import { LoginPage } from "./pages/LoginPage"
import { DashBoardPage } from "./pages/DashBoardPage"
import { CartPage } from "./pages/CartPage"
import testData from "../utils/testData1.json"
const dataset =  JSON.parse(JSON.stringify(testData)) 


for ( const data of dataset){
test(` End to end order with parameterized dataset : order with ${data.productName}`, async ({ page }) => {

    const loginpage = new LoginPage(page)
    const db = new DashBoardPage(page)
    const cp= new CartPage(page)

    await loginpage.launchApp();
    await loginpage.login(data.userName,data.password);
    //adding product to cart
    await db.addProductToCart(data.productName)
    // go to cart page
    await db.goToCartPage()
    
    //in cartpage
    await cp.verifyCartItem(data.productName)
    await cp.checkout()








    

    await page.locator("//div[contains(text(),'CVV Code ')] /following-sibling::input").fill("223");
    await page.locator("//div[contains(text(),'Name on Card ')] /following-sibling::input").fill("Arun");
    await page.locator("[placeholder='Select Country']").pressSequentially("ind")
    await page.locator("(//span[contains(text(),' India')])[2]").click()
    await expect(page.locator('.user__name label')).toHaveText("arun.joseph@gmail.com")
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")

    const raworderid = await page.locator(".em-spacer-1 .ng-star-inserted").first().innerText()
    await page.locator("label[routerlink*='/dashboard/myorders']").click();


   const orderid = raworderid.replace("|", "").replace(" ", "").replace(" ", "").replace("|", "")
    await page.locator(".thead-dark").waitFor()

    await page.locator("tbody tr").filter({ hasText: orderid }).getByRole("button", { name: 'Delete' }).click()


    console.log(orderid)
 



})
}













