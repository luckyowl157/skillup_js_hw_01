const credits = 35500;
const pricePerDroid = 3000;

let numOfDroids = prompt('Кількість дроідів', '')

const result = numOfDroids;
const totalPrice = result * pricePerDroid;
const creditsStill = credits - totalPrice;
console.log('Кількість', result);

if(!result) {
    console.log('Отменено пользователем!');
    
} else {
    console.log('Total price is ', totalPrice);   
    
}
if(totalPrice > credits) {
    console.log('Недостаточно средств на счету!')
} else {
    console.log(`Вы купили ${result} дроидов, на счету осталось ${creditsStill} кредитов`)
} 





