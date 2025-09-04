const fibonacci = function(seqEnd) {
    if (seqEnd < 0){
        return "OOPS"
    }
    if (typeof seqEnd === 'string'){
        seqEnd = parseInt(seqEnd)
    }
    if (seqEnd === 0 || seqEnd === 1){
        return seqEnd
    }
    return fibonacci(seqEnd-1) + fibonacci(seqEnd-2)
};

// Do not edit below this line
module.exports = fibonacci;
