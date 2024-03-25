const sumAll = function(lowNum, highNum) {
    let sum = 0;
    if(lowNum > highNum) {
        [highNum, lowNum] = [lowNum, highNum];
    }

    if(lowNum < 0 || highNum < 0 || typeof lowNum != "number" || typeof highNum != "number") {
        return("ERROR");
    }
    
    while(highNum >= lowNum) {
        sum += highNum;
        highNum--;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
