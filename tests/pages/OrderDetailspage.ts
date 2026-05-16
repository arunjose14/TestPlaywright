export class OrderDetailspage
{

constructor(page){

    this.page=page
    this.orderidloc = page.locator(".em-spacer-1 .ng-star-inserted")
}

async getOrderid()
{

   const raworderid =await this.orderidloc.innerText()
   const orderid = raworderid.replace("|", "").replace(" ", "").replace(" ", "").replace("|", "")
   console.log("order id fetched",orderid)
   return orderid
    
}


}