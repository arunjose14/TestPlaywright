
import { expect, Locator, Page } from "@playwright/test"
export class CartPage {


    constructor(page:Page) {
        this.page = page
        this.cartItem = page.locator("h3")
        this.checkoutBtn = page.locator("text='Checkout'")
    }


    async verifyCartItem(productName:string) {
        await expect(this.cartItem.filter({ hasText: productName})).toBeVisible();
}

async checkout()
{

    await this.checkoutBtn.click();
}

}