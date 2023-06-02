function calc(operation, a, b) {
    switch(operation) {
        case 'add':
            return a + b;

        case 'multi':
            return a * b;
            
        case 'subtract':
            return a - b;    
    }
}
console.log(calc('add', 10, 9));
console.log(calc('multi', 10, 9));
console.log(calc('subtract', 10, 9));