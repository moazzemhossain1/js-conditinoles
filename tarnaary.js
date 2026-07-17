const age=10;
// if(age >=18){
//     console.log("Please can give vote");

// }else{
//     console.log("You are grow up")
// }




// Tarnary oparator

//  conditional ? true : flase;


age>=18 ?  console.log("You can give voate"): console.log("you grow up");




const slary=40000;
slary>=40000 ?  console.log("you can married my dutter"): console.log("you can not  married my dutter")




let price=5000;
const isLader=false;
if(isLader){
    const discount=50;
    const discountAmount=price/100*50;
    price=price-discountAmount;
}
else{
    price=price+1000;
}

console.log("The tottle price is:" +price)