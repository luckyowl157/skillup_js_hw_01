let input; 
let total = prompt('Введите  число', 0);

for (let i = 0; input; i += 1) {
    if(!isNaN(Number(input))) {
        total += Number(input)
        input = prompt('Введите только цифри. Введите число', 0)
    } else {
        input = prompt('Введите число', 0)
    }
}
console.log(`Общая сумма чисел равна ${total}`)