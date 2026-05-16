import { Locator, Page } from "@playwright/test";

export class DashBoardPage {

    readonly cartBtn
    readonly page;
    readonly productCard;
    constructor(page:Page) {
        this.page = page
        this.productCard = page.locator(".card")
        //  this.desiredCard = desiredCard
        this.cartBtn = page.locator("[routerlink*='cart']")


    }


    async addProductToCart(productName:string) {
        const dproductCard = this.productCard.filter({ hasText: productName });
        await dproductCard.getByRole("button", { name: ' Add To Cart' }).click();
    }

    async goToCartPage() {
         await this.cartBtn.click()

    }
}