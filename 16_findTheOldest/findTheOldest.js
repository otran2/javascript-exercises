const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (getAge(oldest.yearOfBirth, oldest.yearOfDeath) > getAge(person.yearOfBirth, person.yearOfDeath)){
            return oldest
        }
        return person
    })
};

function getAge(birth, death){
    if (!death){
        return (new Date().getFullYear() - birth)
    }
    else{
        return death-birth
    }
}

// Do not edit below this line
module.exports = findTheOldest;
