const removeFromArray = function(arr, ...args) {
    let amountSpliced = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let arg of args) {
            if (arg == arr[i] && arg === arr[i]) {
                arr.splice(i,1);
                arr.unshift("asdfasdfasdf");
                amountSpliced++;
            }
        }
        
    }

    while(amountSpliced > 0) {
        arr.shift();
        amountSpliced--;
    }




    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
