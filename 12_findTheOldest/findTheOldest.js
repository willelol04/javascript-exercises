const findTheOldest = function(array) {
    array.sort((a, b) => {
        
        if(!a.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear();
        }

        if(!b.yearOfDeath) {
            b.yearOfDeath = new Date().getFullYear();
        }
        

        if((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return -1;
        }
        return 1;
    });

    return(array[0]);

};


// Do not edit below this line


module.exports = findTheOldest;
