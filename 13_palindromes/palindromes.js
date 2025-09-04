const palindromes = function (string) {
    let start = 0
    let end = string.length - 1
    while (start < end){
        if (/^[a-z0-9]$/i.test(string[start]) === false){
            start ++
        }
        else if (/^[a-z0-9]$/i.test(string[end]) === false){
            end --
        }
        else{
            if (string[start].toLowerCase() != string[end].toLowerCase()){
                return false
            }
            start ++
            end --
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
