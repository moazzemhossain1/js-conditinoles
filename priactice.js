const price1 = 500;
const price2 = 600;

if (price1 > price2) {
    console.log("Hi");
}
else if (price1 < price2) {
    console.log("Hello");
}
else if (price1 <= price2) {
    console.log("Habue");
}
else if (price1 >= price2) {
    console.log("Habue");
}
else if (price1 === price2) {
    console.log("Habue");
}
else if (price1 !== price2) {
    console.log("Habue");
}
else {
    console.log("nameva");
}


const price3 = "5";
const price4 = 5;
console.log(price3 === price4)



const isRaninge = true;
if (isRaninge) {
    console.log("Take and umbella.")
}
else {
    console.log("not take an umbella")
}




const stock = 0;
if (stock == 0) {
    console.log("Use only if ,no else");

}
else {
    console.log("Stock is raning")
}


const number = 5;
if (number > 0) {
    console.log("positive number")
} else if (number < 0) {
    console.log("nagative number")
} else {
    console.log("zero")
}



const year = 2026;
if (year % 4 === 0) {
    console.log("lep year")
} else {
    console.log("lep year na")
}



const speed = 100;
if (speed > 80) {
    console.log("Overspeeding");
} else {
    console.log("Normal speed")
}


const age = 20;
const hasTicket = false;
if (age > 18 && hasTicket !== true) {
    console.log("You Enter")
}
else {
    console.log("You not Enter")
}


const isWeekend = true;
const isHokdiay = false;
if (isHokdiay || isWeekend) {
    console.log("No Work today")
}
else {
    console.log("kaj karo")
}



const userName = "moazzem";
const pasword = 12344;
if (userName === "Moazzem" && pasword === 12344) {
    console.log("You can acces this priject")
}
else {
    console.log("Please loging ")
}




const marks = 33;
if (marks > 80) {
    console.log("A+")
}
else if (marks > 70) {
    console.log("A")
}
else if (marks > 60) {
    console.log("B")
}
else if (marks > 50) {
    console.log("C")
}
else if (marks >= 33) {
    console.log("D")
}
else {
    console.log("F")
}




const weight = 80;
const height = 2.25;
const bmi = weight / (height * height);

if (bmi >= 40) {
    console.log("Wendwihat")
} else if (bmi >= 30 && bmi >= 30) {
    console.log("normale ")

}
else {
    console.log("bande wight")
}

const month = 12;
if (month >= 1 && month <= 2) {
    console.log('The sesson is summare')
} else if (month >= 2 && month <= 4) {
    console.log("The sesson is Rany season or Monsoon");
} else if (month >= 4 && month <= 6) {
    console.log("The season is Autumn");
} else if (month >= 6 && month <= 8) {
    console.log("The sesone is  late autumn");
} else if (month >= 8 && month <= 10) {
    console.log("The sesone is winter")

}
else if (month >= 10 && month <= 12) {
    console.log("The seasone is spring")
}



const age3 = 22;
const isHaase = true;
if (age3 >= 22) {
    if (isHaase === true) {
        console.log("you can vote.")
    }
}
else {
    console.log("you can not vot.")
}


const age4 = 20;
const isHave = true;
if (age4 >= 22 && isHave === true) {
    console.log("you can vot");
} else {
    console.log("you can not vot")
}




const isLoggedIn = false;
const isAdmin = false;
if (isLoggedIn === true) {
    console.log("User Dashboard");
    if (isAdmin === true) {
        console.log("Admin Dashboard ");
    }
} else {
    console.log("Please Login.")




}



const numbe1 = 11;
 if (numbe1 % 2 === 0) {
        console.log("This is even number.");
}
else{
    console.log("This is a odd number.")
}


const age5=10;
age5 >=18 ? console.log("Adult"): console.log("Minor");



const price5=1200;
price5 >1000 ? console.log("Expensive"):console.log("Affodable");



const isPermomisem=false;
if(isPermomisem !==true){
    console.log("you can go.")
}else{
    console.log("you can not go")
}


const isOnline=false;
if(isOnline !==false){
    console.log("online")
}
else{
    console.log("offline")
}



let price6=1000;
const isMember=true;
if( isMember === true){
    const discount=20;
    const discountAmount=price6/100*20;
    const payAmount=price6 - discountAmount;
    console.log("Pay Amount :", +payAmount);
}else if(price6 >=1000){
        const discount=10;
    const discountAmount=price6/100*10;
    const payAmount=price6 - discountAmount;
    console.log("Pay Amount :", +payAmount);
    
}else{
    console.log("Full pay:", +price6)
}