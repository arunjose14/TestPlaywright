import {test,expect} from "@playwright/test"

test("Verify title",async ({page})=>
{

await page.goto("https://gehc.com/");
let ttl = await page.title();
console.log(ttl);
await expect(page).toHaveTitle("Home");
}
)