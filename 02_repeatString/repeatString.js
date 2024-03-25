const repeatString = function(theString, repetitions) {
    let firstString = theString;
    if(repetitions > 0) {
        for (i = 1; i < repetitions; i++) {
            theString += firstString;
        }
    }
    else if (repetitions == 0) {
        return "";
    }
    else {
        return "ERROR";
    }
    return theString;

};

// Do not edit below this line
module.exports = repeatString;
