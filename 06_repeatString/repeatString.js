

const repeatString = function(string,num) {
    if (num === 0) return "";
    if (num < 0) return "ERROR";

    let result = "";
    let count = 0;

    while (count < num) {
        result += string;
        count++;
    }

    return result;
}

// Do not edit below this line
module.exports = repeatString;
