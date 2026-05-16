import {Page ,Locator} from "@playwright/test"
export class MyOrderspage
{
 page:Page;
 orders:Locator;
 orderrows:Locator;

    constructor(page:Page)
    {
        this.page=page
        this.orders = page.locator("label[routerlink*='/dashboard/myorders']")
        this.orderrows = page.locator("tbody tr")

         //await page.locator("tbody tr")
    }

    async goToMyOrder()
    {
        await this.orders.click()
    }

    async deleteOrder(orderid:string)
    {

        await this.page.locator(".thead-dark").waitFor()
       await this.orderrows.filter({ hasText: orderid }).getByRole("button", { name: 'Delete' }).click()
    }
}