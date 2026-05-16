export class ApiUtils
{

    constructor(apicontext,payload)
    {

        this.apicontext = apicontext;
        this.payload = payload;
    }

    async getToken(){
    //login call
    
    
    const response = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        { data: this.payload }
    )

    const jsone = await response.json()
    const utoken = await jsone.token;
 
    return utoken
    }

    async getOrderid(orderpayload)
    {
        const token = await this.getToken(); 
            const orderesp = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
                data: orderpayload,
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
        
                }
            })
        
            const orderespjson = await orderesp.json()
          const  orderId = await orderespjson.orders[0]
            console.log(orderId)
            return(orderId)
    }

    
}


