// Написать функцию isBudgetEnough, которая будет возвращать строку.
// Если бюджета хватает для отопления всего объема торгового центра - выводится "Бюджета достаточно"
// если нет - "Бюджета недостаточно"
// Но эта задача содержит несколько подзадач внутри
// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на ширину.
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах
// - определение того, хватит ли бюджета на оплату такого объема
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или
// подставляется вообще другой объект


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    const {shops} = shoppingMallData;
    let shopVolume = 0;
    let shopSquare = 0;
    data.shops.forEach((items) => {
        shopSquare += items.length * items.width;
    });
    shopVolume = shopSquare * data.height;
    console.log(shopSquare);
    if (data.budget >= shopVolume * data.moneyPer1m3) {
        console.log('Бюджета достаточно');
        return 'Бюджета достаточно';
    } else {
        console.log('Бюджета недостаточно');
        return 'Бюджета недостаточно';
    }
}
isBudgetEnough(shoppingMallData);




// Есть список учеников, которые хотят поиграть в игру, но команд может быть только 3 по 3 человека.
// Напишите функцию, которая принимает в себя массив строк.
// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы
// по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с
// тремя командами и строкой как 4й элемент



const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Terry'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
         
    }
    console.log(a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`);
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

sortStudentsByGroups(students);