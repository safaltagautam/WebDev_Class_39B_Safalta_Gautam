let purchaseAmount = 300;
let FinalPrice;
if(purchaseAmount>=100){
    FinalPrice= purchaseAmount-purchaseAmount*0.2;
    console.log("FinalPrice=",FinalPrice);
}
else if(purchaseAmount>=50){
    FinalPrice= purchaseAmount-purchaseAmount*0.1;
    console.log("FinalPrice=",FinalPrice);   
}
else{
    console.log("FinalPrice=",FinalPrice);     
}
