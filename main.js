/*
 * Напиши скрипт який порахує суму всіх парних чисел,
 * які входять в діапазон чисел в змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в 
 * ньому 2 парних числа - 2 та 4, їх сума 6.
 */
const min = 1;
const max = 9;
let total = 0;
for (let i = min; i >= max; i += 1){//треба порахувати всі парні числа від 1 до 9
    if (i % 2 === 0){
        total += 1;
    }
}