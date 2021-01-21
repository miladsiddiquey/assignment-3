// PROBLEM-1 CONVERT KILOMETER TO METER

function kilometerToMeter(kilometer){
    if(kilometer<0){
        return " sorry! can't calculate nagative value. please input positive value.";
    }
    const meter=kilometer*800;
    return meter;
}


// call kilometerToMeter function
let resultToMeter=kilometerToMeter(5);
console.log(resultToMeter);






// PROBLEM-2 BUDGET CALCULATOR

function budgetCalculator(watchs, phones, laptops) {
    
    if (watchs < 0 || phones < 0 || laptops < 0) {
        return "Sorry! can't calculate nagative value. Please input positive value.";
    }

    let watchPrice = 100;
    let phonePrice = 80;
    let laptopPrice = 1000;

    let watchCost = watchs * watchPrice;
    let phoneCost = phones * phonePrice;
    let laptopCost = laptops * laptopPrice;

    let totalCost = watchCost + phoneCost + laptopCost;
    return totalCost;
}


// call budgetCalculator function
const resultTotatBudget = budgetCalculator(4, 5, 3);
console.log(resultTotatBudget);





// PROBLEM-3 HOTELCOST 

function hotelCost(days){

    if(days<0){
        return "please input positive value.";
    }

    let amount=0;
    if(days<=0){
        amount=days*100;
    }
    else if(days<=20){
        let firstPart=10*100;
        let remaining=days-10;
        let secendPart=remaining*80;
        amount=firstPart+secendPart;
    }
    else{
        let firstPart=10*100;
        let secendPart=10*80;
        let remaining=days-20;
        let thirdPart=remaining*50;
        amount=firstPart+secendPart+thirdPart;
    }
    return amount;
}

// call hotelCost function 
let resultTotalCost=hotelCost(12);
console.log(resultTotalCost);




// PROBLEM-4 MEGAFRIEND

function megaFriend(arr) {
    
    if (arr.length == 0) {
        return "Sorry! is empty, please input a value."
    }

    let largeName = arr[0];

    let largeNameLength = largeName.length;

    for (let i = 0; i < arr.length; i++) {

        let element = arr[i];

        let elementLength = element.length;

        if (largeNameLength < elementLength) {
            largeName = element;
            largeNameLength = elementLength;
        }
    }
    return largeName;
}

let friendsName = ['jamal','abdulla ','siddiquey','raj','aminul'];  // array list

// call megaFriend function 
let largestName = megaFriend(friendsName);
console.log(largestName);