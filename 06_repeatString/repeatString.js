const repeatString = function(str, iters) {
    if (iters < 0){
        return "ERROR"
    }
    let ret = ""
    while (iters > 0){
        ret += str
        iters --
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
