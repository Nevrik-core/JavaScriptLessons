// При помощи цикла for выведите четные числа от 2 до 10 включительно
for (let i = 2; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

    let i = 2;
        while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
            } else {
            console.log(i);
            }
            i++;
        }
// Заполните массив цифрами от 5 до 10 включительно
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);



// Заполните новый массив (result) числами из старого (arr). 

  /*    const arr = [3, 5, 8, 16, 20, 23, 50];
     const result = [];

     for (let i = 0; i < arr.length; i++) {
         result[i] = arr[i];
     }
     console.log(result);
     
// Измените данный массив так, чтобы все числа были увеличины в 2 раза, 
          а если попадается строка - то к ней было добавлено " - done".

     const data = [5, 10, 'Shopping', 20, 'Homework'];

        for (let i = 0; i < data.length; i++) {
            if (typeof(data[i]) === 'number') {
                data[i] = data[i] * 2;
            } else if (typeof(data[i]) === 'string') {
                data[i] = `${data[i]} - done`;
            }
        }

        console.log(data); */

// разверните массив data наоборот при помощи цикла и запишите данные в массив result

     /*    const data = [5, 10, 'Shopping', 20, 'Homework'];
        const result = [];
        
        for (let i = 1; i <= data.length; i++) {
            result[i - 1] = data[data.length - i];
        }
        console.log(result); */


      //   *
     //   ***
    //   *****
   //   *******
  //   *********
 //   ***********

 /*    const lines = 5;
    let result = '';

    for (let i = 0; i <= lines; i++) {
        for(let j = 0; j < lines - i; j++) {
            result += ' ';
        }
        for(let j = 0; j < 2 * i + 1; j++) {
            result += '*';
        }
        result += '\n';
    }
    console.log(result); */



    // Конвертер валют

    const usdCurr = 29.550;
    const twtCurr = 1.095;

    function convert(amount, curr) {
        console.log(curr * amount);
    }
    convert(223.81, twtCurr);
    convert(223.81, (twtCurr * usdCurr));



    // Регистрация на codewars

    function multiply(a, b){
       return (a * b);
      }
      multiply(5, 55);
   


// Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку 

    function sayHello(name) {
       
        return `Привет, ${name}!`;
    }
    sayHello('Андрей');



// Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 
// 1 меньше, сам аргумент, и число на 1 больше

    function returnNeighboringNumbers(number) {
        return [number - 1, number, number + 1];
    }
    returnNeighboringNumbers(5);



    // Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа
    // Первое число - это база, второе - это сколько раз нужно будет повторить это число в прогрессии.
    // Функция должна возвращать строку, где эти числа идут по порядку, разделенные тремя дефисами "---".
    // После последнего числа их не должно быть.
    // Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент.

    function getMathResult(base, increment) {
        if (typeof(increment) !== 'number' || increment <= 0) {
            return base;
        }

        let str = '';
        for(let i = 1; i <= increment; i++) { 
            if (i === increment) {
                str += `${base * i}`;
            } else {
                str += `${base * i}---`;
            }
        }
        return str;
    
    }
    getMathResult(3, 7);

    
    // Создайте функцию, которая будет вычислять объем и площать полной поверхности куба.
    // Эта функция примет в себя целое число со значением длины ребра куба.
    // Ответ выведите в формате строки, calculateVolumeAndArea(5) => 'Объем куба: 125, площадь всей поверхности 150'

    function calculateVolumeAndArea(a) {
        if (typeof(a) !== 'number' || a < 0 || !Number.isInteger(a)) { //isInteger это определение целого числа
            console.log('Произошла ошибка');
            return 'Произошла ошибка';
        } 
        let volume = 0,
            area = 0;

        volume = a * a * a;
        area = 6 * a * a;
        console.log(`Объем куба: ${volume}, площадь всей поверхности ${area}`);
        return `Объем куба: ${volume}, площадь всей поверхности ${area}`;
    }
    
    calculateVolumeAndArea(2);




    // Напишите функцию, которая будет определять номер купе по переданному ей номеру места
    // Функция принимает только целое число от 1 до 36.
    // Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
    // "Ошибка. Проверьте правильность введенного номера места"
    // Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

    function getCoupeNumber(seatNumber) {
        if (typeof(seatNumber) !== "number" || seatNumber < 0 || !Number.isInteger(seatNumber)) {
            console.log('Ошибка. Проверьте правильность введенного номера места');
            return 'Ошибка. Проверьте правильность введенного номера места';
        } else if (seatNumber == 0 || seatNumber > 36) {
            console.log('Таких мест в вагоне не существует');
            return 'Таких мест в вагоне не существует';
        }

    /*     for (let i = 4; i <= 36; i = i + 4) { // то же самое только цикл
            if (seatNumber <= i) {
                console.log(Math.ceil(i / 4));
                return Math.ceil(i / 4);
            }
       } */
       let coupeNumber = 0;
       coupeNumber = Math.ceil(seatNumber / 4);
       console.log(coupeNumber);
       return coupeNumber;
    }
    
    getCoupeNumber(12);



    // Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.
    // "Это 5 часов и 30 минут"
    // Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры.
    // Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку
    // "Ошибка, проверьте данные"

    function getTimeFromMinutes(minutes) {
        if(typeof(minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
            console.log('Ошибка, проверьте данные');
            return 'Ошибка, проверьте данные';
        }

        const showHour = Math.floor(minutes / 60),
              showMinute = minutes % 60;


    
            if (showHour == 1) {
                console.log(`Это ${showHour} час и ${showMinute} минут`);
                return `Это ${showHour} час и ${showMinute} минут`;

            } else if (showHour == 2 || showHour == 3 || showHour == 4) {
                console.log(`Это ${showHour} часа и ${showMinute} минут`);
                return `Это ${showHour} часа и ${showMinute} минут`;

            } else if (showHour !== 1 || showHour !== 2 || showHour !== 3 || showHour !== 4) {
                console.log(`Это ${showHour} часов и ${showMinute} минут`);
                return `Это ${showHour} часов и ${showMinute} минут`;
            }
    }
    getTimeFromMinutes(59);


    // это сделал я, вижу что криво. А вот так сделал Иван

    function getTimeFromMinutes(minutesTotal) {
        if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
            return "Ошибка, проверьте данные";
        }
    
        const hours = Math.floor(minutesTotal / 60);
        const minutes = minutesTotal % 60;
    
        let hoursStr = '';
    
        switch (hours) {
            case 0: 
                hoursStr = 'часов';
                break;
            case 1:
                hoursStr = 'час';
                break;
            case 2:
            case 3:
            case 4:
                hoursStr = 'часа';
                break;
            default:
                hoursStr = 'часов';
        }
    
        return `Это ${hours} ${hoursStr} и ${minutes} минут`;
    }
    
    getTimeFromMinutes(180);



    // Напишите функцию, которая принимает в себя 4 числа и возвращает самое большое из них.
    // Если один из аргументов не является числом - возвращается 0.
    // Дробные числа разрешены.

    function findMaxNumber(first, second, third, fourth) {
        if (typeof(first) !== 'number' || 
            typeof(second) !== 'number' || 
            typeof(third) !== 'number' || 
            typeof(fourth) !== 'number') {
            console.log(0);
            return 0;
        } else { 
            console.log(Math.max(first, second, third, fourth));
            return Math.max(first, second, third, fourth);
        }
    }
    findMaxNumber(1, 5, 6, 2);



    // Фибоначчи
    // Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число.
    // Она должна фозвращать строку, в которой будут через пробел выведены числа Фибоначчи.
    // Причем, их количество должно быть равно переданному аргументу.
    // Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

    function fib(num) {
        if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
            console.log('" "');
            return '" "';
        }

        let result = '';
        let first = 0;
        let second = 1;

        for (let i = 0; i < num; i++) {
            if (i + 1 === num) {
                result += `${first}`;
            } else {
                result += `${first} `;
            }
            let third = first + second;
            first = second;
            second = third;
        }
        return result;
        
    }

    fib(12);