import { Locator, Page } from "@playwright/test"

export class CheckOutpage {

    cvv: Locator;
    nameoncard: Locator
    page: Page
    countrydropdown: Locator
    submitbtn: Locator
    constructor(page: Page) {

        this.page = page
        this.cvv = page.locator("//div[contains(text(),'CVV Code ')] /following-sibling::input")
        this.nameoncard = page.locator("//div[contains(text(),'Name on Card ')] /following-sibling::input")
        this.countrydropdown = page.locator("[placeholder='Select Country']")
        //
        this.submitbtn = page.locator(".action__submit")
    }


    async enterCheckoutdetails(cvv:string, nameoncard:string, country:string) {
        await this.cvv.fill(cvv)
        await this.nameoncard.fill(nameoncard)

        const firstThree: string = country.slice(0, 3);
        await this.countrydropdown.pressSequentially(firstThree)
        const xpath = `(//span[contains(text(),' ${country}')])[2]`
        await this.page.locator(xpath).click()
        await this.submitbtn.click()

    }
}