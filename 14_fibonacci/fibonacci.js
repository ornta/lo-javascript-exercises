const fibonacci = p => {
    const index = Number(p);

    if (!Number.isInteger(index) || index < 0) return "OOPS";
    if (index === 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;
    
    // We already know position 0 & 1, and each loop calculates the next fibonacci number.
    for (let i = 2; i <= index; i++) {
        const current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
}

// Do not edit below this line
module.exports = fibonacci;
