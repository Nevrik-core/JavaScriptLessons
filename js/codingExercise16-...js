// факториал
function factorial(num) {
    if (typeof(num) !== 'number' || !Number.isInteger(num)) { 
        console.log('Введите пожалуйста целое число');

    } else if (num <= 0) {
        return 1;
    } else {
        return num * factorial(num-1);
    }
}

console.log(factorial(6));