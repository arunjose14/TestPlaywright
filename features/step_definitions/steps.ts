import { Given, When, Then } from "@Cucumber/Cucumber"
import { chromium } from "@playwright/test"

const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()
import testData from "../../utils/testData.json"
import { LoginPage } from "../../tests/pages/LoginPage"
import { DashBoardPage } from "../../tests/pages/DashBoardPage"
const testdata = JSON.parse(JSON.stringify(testData))
const loginpage = new LoginPage(page)
const db = new DashBoardPage(page)
Given('User logs in with valid creds', async function logintoApp() {
    await loginpage.launchApp();
    await loginpage.login(testdata.userName, testdata.password);

//test
});


When('User adds the item {string} to cart', async function (string) {
    await db.addProductToCart(string)
    // go to cart page
    await db.goToCartPage()
});