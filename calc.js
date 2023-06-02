function calc(operation, a, b) {
    if (operation === 'add') { return a + b }
    if (operation === 'multi') { return a * b }
    if (operation === 'subtract') { return a - b }
    
}

console.log(calc('add', 10, 5));
console.log(calc('multi', 10, 5));
console.log(calc('subtract', 10, 5));