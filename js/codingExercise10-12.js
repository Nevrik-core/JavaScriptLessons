// Создайте метод внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект
// и возвращать строку в нужном виде "Мне 29 и я владею языками: RU ENG"


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
        
    },
    showAgeAndLangs: function(plan) {
        const {age} = personalPlanPeter;
        const {languages} = personalPlanPeter.skills;
        let str = `Мне ${age} и я владею языками: `;
        languages.forEach(lang => {
            str += `${lang.toUpperCase()} `;
        });
        console.log(str);
        return str;
    }

};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);




// Напишите функцию, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде
// "Язык js изучен на 20% Язык php изучен на 10%"
// Функция должна работать вне зависимости от количества языков. Елси ни один не указан, то возвращается пустая строка.

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = personalPlanPeter.skills;
    for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    console.log(str);
    return str;

}
showProgrammingLangs(personalPlanPeter);





// Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
/* 
function showExperience(plan) {
  
    const {exp} = personalPlanPeter.skills;
    console.log(`${exp}`);
    return exp;
}
showExperience(personalPlanPeter); */






// Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// "Семья состоит из: Peter Ann Alex Linda "
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение "Семья пуста".

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr == '') {
        console.log('Семья пуста');
        return 'Семья пуста';
    } else {
        let familyNames = `Семья состоит из: `;
        arr.forEach(function(names) {
            familyNames += `${names} `;
    }); 
        console.log(familyNames);
        return familyNames;
    }
}
showFamily(family);





// Напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль
// эти строки в нижнем регистре

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}
standardizeStrings(favoriteCities);




// Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        console.log('Ошибка');
        return 'Ошибка';
    }

    // Самый оптимальный вариант решения от Ивана
    // return str.split('').reverse().join('');

    let newStr = '';
    for (let i = str.length - 1; i >=0; i--) {
        newStr += str[i];
    }
    console.log(newStr);
    return newStr;
}
reverse(someString);




// Создать главную функцию банкомата, которая принимает два аргумента: первый - это массив со всеми доступными валютами
// из двух банков сразу, второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась
// в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку "Нет доступных валют"
// Функция возвращает строку в нужном виде
// "Доступные валюты:"
// После "валюты" стоит перенос строки /n, и после каждой валюты тоже.
// Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом
// additionalCurrencies по порядку

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const combineCurrencies = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    let str = '';


    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты: \n';

  /*   if (arr == '') {
        console.log('Нет доступных валют');
        str = 'Нет доступных валют';
    } else {
        str = 'Доступные валюты: \n';
    } */

    arr.forEach(function(item) {
        if (item !== missingCurr) {
            str += `${item}\n`; 
        }
        
    }); 
    console.log(str);
        return str;
}

availableCurr(combineCurrencies, 'RUB');
