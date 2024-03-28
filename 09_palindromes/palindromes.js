const palindromes = function (string) {
    let array = string
        .toLowerCase()
        .split("");

    const unacknowledged = [" ", ".", ",", "!"];

    array = array.filter((item => !unacknowledged.includes(item)));
    
    return array.join() == array.reverse().join();


};

// Do not edit below this line
module.exports = palindromes;
