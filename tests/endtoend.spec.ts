import { test, expect, Locator } from "@playwright/test"
import { LoginPage } from "./pages/LoginPage"
import { DashBoardPage } from "./pages/DashBoardPage"
import { CartPage } from "./pages/CartPage"
import testData from "../utils/testData.json"
import { CheckOutpage } from "./pages/CheckOutpage"
import { OrderDetailspage } from "./pages/OrderDetailspage"
import { MyOrderspage } from "./pages/MyOrderspage"
const testdata = JSON.parse(JSON.stringify(testData))

test("@POM End to end order with data", async ({ page }) => {

    const loginpage = new LoginPage(page)
    const db = new DashBoardPage(page)
    const cp = new CartPage(page)
    const checkoutpage = new CheckOutpage(page)
    const orderdetailspage = new OrderDetailspage(page)
    const myorders = new MyOrderspage(page)

    await loginpage.launchApp();
    await loginpage.login(testdata.userName, testdata.password);
    //adding product to cart
    await db.addProductToCart("ADIDAS ORIGINAL")
    // go to cart page
    await db.goToCartPage()

    //in cartpage
    await cp.verifyCartItem(testdata.productName)
    await cp.checkout()

    //checoutpage
    await checkoutpage.enterCheckoutdetails(testdata.cvv, testdata.nameoncard, testdata.country)
    const orderid = await orderdetailspage.getOrderid()

    //my orders
    await myorders.goToMyOrder()
    await myorders.deleteOrder(orderid)

    console.log("The deleted order" ,orderid)
    await page.waitForTimeout(2000)



})

