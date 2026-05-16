export class LoginPage{

constructor(page){

    this.page=page;
    this.username= page.locator("#userEmail");
    this.password=page.locator("#userPassword")
    this.submitbtn=page.locator("#login")

}


async launchApp()
{
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await this.page.waitForLoadState('networkidle');
}

async login(username ,password)
{
    await this.username.fill(username)
    await this.password.fill(password)
    await this.submitbtn.click()
}
}