const fibonacci = function(num) {
    sum = 0;
    last = 1;
    if(!(num >= 0)) {
        return "OOPS";
    }

    for(let i = 1; i <= num; i++) {
        sum += last;
        last = sum - last;
        
        
    }

    return(sum);

};

// Do not edit below this line
module.exports = fibonacci;
