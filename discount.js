const tottlePrice=6000;
if(tottlePrice >5000){
    const discount=30;
    const discountAmount=tottlePrice/100*30;
    const payBile=tottlePrice - discountAmount;
    console.log("Please pay:" +payBile);
}
else if (tottlePrice >3000){
    const discount=20;
    const discountAmount=tottlePrice/100*20;
    const pay=tottlePrice - discountAmount;
    console.log("Please pay:" +pay)
}


else if(tottlePrice >1000){
    const discount=10;
    const discountAmount=tottlePrice/100*10;
    const pay=tottlePrice - discountAmount;
    console.log("Please pay:" +pay)
    
}

else{
    console.log("pleade pay bile" )
}