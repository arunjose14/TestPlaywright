import {test,expect, Locator } from "@playwright/test"


test.describe.configure({mode:'parallel'})
test('dynamic' , async({page})=>{

let nextpage=true;
await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")


while(nextpage)
{const rows=await  page.locator('#example tbody tr').all()
    for(const r of rows)
    {
        console.log(await r.innerText())

    }
    const nextbutton = page.locator('button[aria-label="Next"]')
    const isDisabled = await nextbutton.getAttribute('class')
    if(isDisabled?.includes('disabled '))
    {
        nextpage=false;
        
    }
    else{
        await nextbutton.click()
    }

}

})



test('dynamic search' , async({page})=>{

let salaryMan

await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")

const rows=await  page.locator('#example tbody tr').all()

for(const row of rows){

    const cellvalue = await row.locator('td').nth(5).innerText()
    if( cellvalue.includes('1,200,000'))
    {
  salaryMan=await row.locator('td').nth(0).innerText()
  break;

    }
}

  console.log("Salary man is :", salaryMan)

})