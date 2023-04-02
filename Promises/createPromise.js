cart= [];

const promise = createOrder(cart)
.then((orderId)=>{
    console.log(orderId);
    return proceedToPayment(orderId)
})
.then((paymentInfo)=>{
    console.log(paymentInfo)
    console.log("GOD MODE")
})
.catch((err)=>{//this is for error handling, if promise fails then it will catch the error
    alert(err);
})
function validateCart(cart){
    if(cart.length===0){
        return false;
    }
    return true;
}

function createOrder(cart){
    const pr = new Promise((resolve, reject) => {
        
        if(!validateCart(cart)){
            const err = new Error("cart is invalid");
            reject(err);
        }
        const orderId = 123;
        resolve(orderId);
    })

    return pr;
}

function proceedToPayment(orderId){

    return new Promise((resolve, reject) => {
        
        resolve("payment Successful");
    })
}

