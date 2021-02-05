// Data types - типы данных в JavaScript

// Variable - переменная
const apple: string = 'яблоко' // создали константную (неизменную) переменную строку
// варианты создания строки:
// ''
// ""
// ``

let counter: number = 0 // создали число, можно изменить, до 9007199254740991 безопасно, после нет
// let counter3: bigint = 0n // создали большое число, больше 9007199254740991 безопасно

counter = 458 // let изменеяется, const - нет

const isMale: boolean = false // булево значение true/false

const und: undefined = undefined // undefined - не найденное значение
const nl: null = null // null - 0, ничего, пустота

const sym1: symbol = Symbol('дом') // уникальное значение
const sym2: symbol = Symbol('дом') // уникальное значение

console.log(sym1 === sym2) // не равно

// Структуры данных
// Массив
const numbers: number[] = [1, 2, 3, 4]

// Объект
const person = {
  // ключ: значение,
  age: 27,
  name: 'Руслан',
  profession: 'учитель',
  isMale: true,
}

console.log(person.age) // получаем доступ к значению поля age = 27

// Создание функции
function sum(a: number, b: number) {
  return a + b
}

// Вызов функции
sum(1, 2) // вернёт 3 (1+2=3)

// Циклы
for (let i = 0; i < 3; i++) {
  console.log('я появлюсь в консоли 3 раза')
}

// Условия
// Если счётчик больше 10, то console.log выполнится
if (counter > 10) {
  console.log('счётчик больше 10')
}
