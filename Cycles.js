//1) Создать функцию которая выводит в консоль число и строку содержащую в себе информацию о четности этого числа
const evFunction = (even) => {
    (even % 2) ? console.log( even, 'Нечетное') : console.log( even, 'Четное')
}
//evFunction(2);
//2) Создать функцию принимающую 2 числа, выбрать из двух чисел меньшее.
//    Запустить цикл от 1 до n(где n меньше число из аргументов функции) и
//вывести поочередно все числа до N в консоль. Написать три экземпляра функции,
//    используя поочередно все циклы. Функцию вызвать в конце скрипта.
const minFunction = (mini,low) => {
    let n = 0;
    mini < low ? (n = mini) : low <mini ? (n = low) : console.log('ошибка');
    let now = 1;
    while (now <= n) {
        console.log(now);
        now++;
    }
}
//minFunction(5,4);

const minFunction2 = (mini,low) => {
    let n = 0;
    mini < low ? (n = mini) : low <mini ? (n = low) : console.log('ошибка');
    let now = 1;
    do {
        console.log(now);
        now++;
    } while (now <= n);
    };

//minFunction2(5,4);

const minFunction3 = (mini,low) => {
    let n = 0;
    mini < low ? (n = mini) : low <mini ? (n = low) : console.log('ошибка');
    for (let now = 1; now <= n;  now++) {
        console.log(now);
    }
};
//minFunction3(5,4);
//3.Создать функцию принимающую 2 числа, выбрать из двух чисел большее.
//    Запустить цикл от 1 до n(где n большое число из аргументов функции) и
//вывести поочередно все четные числа до N в консоль.  Написать три экземпляра функции,
//    используя поочередно все циклы. Функцию вызвать в конце скрипта.
const maxFunction = (max,big) => {
    let n = 0;
    max > big ? (n = max) : big > max ? (n = big) : console.log('ошибка');
    let now = 1;
    while (now <= n) {
        if (now % 2 === 0) {
            console.log(now);
        } now++;
    }
};
//maxFunction(8,6);

const maxFunction2 = (max,big) => {
    let n = 0;
    max > big ? (n = max) : big > max ? (n = big) : console.log('ошибка');
    let now = 1;
    do {
        if (now % 2 === 0) {
            console.log(now);
        } now++;
    }
    while (now <= n);
};
//maxFunction2(8,6);



const maxFunction3 = (max,big) => {
    let n = 0;
    max > big ? (n = max) : big > max ? (n = big) : console.log('ошибка');
    for (let now = 1; now <= n ;  now++) {
        if (now % 2 === 0) {
            console.log(now);
        }
    }
};
//maxFunction3(8,6);

//4) Создать функцию принимающую 2 числа(N и M). Запустить цикл от 1 до N.
// Вывести поочередно числа и их произведение с числом M, если произведение с чиcлом M - нечетное.
// Написать три экземпляра функции, используя поочередно все циклы. Функцию вызвать в конце скрипта.
const ymnFunction = (n,m) => {
    let now = 1;
    while (now <= n) {
        let future = now * m;
        if (future % 2) {
            console.log(now);
            console.log(future);
        }
        now++;
    }
}
//ymnFunction(8,3);

const ymnFunction2 = (n, m) => {
    let now = 1;
    do {
        let future = now * m;
        if (future % 2) {
            console.log(now);
            console.log(future);
        }
        now++;
    } while (now <= n);
}
//ymnFunction2(8,3);

const ymnFunction3 = (n,m) => {
    for (let now = 1; now <= n ;  now++) {
        let future = now * m ;
        future % 2 && (console.log(now) || console.log(future))
        }
};
//ymnFunction3(8,3);