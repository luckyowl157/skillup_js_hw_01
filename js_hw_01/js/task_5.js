let country = prompt('Type country', '');

country = country[0].toLocaleUpperCase() + country.slice(1).toLowerCase();

switch (country) {
    case 'Китай':
        console.log(`Доставка в ${country} будет стоить 150 кредитов!`)
        break

    case 'Чили':
        console.log(`Доставка в ${country} будет стоить 250 кредитов!`)
        break

    case 'Австралия':
        console.log(`Доставка в ${country} будет стоить 165 кредитов!`)
        break
    case 'Индия ':
        console.log(`Доставка в ${country} будет стоить 90 кредитов!`)
        break

    case 'Ямайка':
        console.log(`Доставка в ${country} будет стоить 130 кредитов!`)
        break

    default:
        console.log('В вашей стране доставка не доступна!')
}

//.toUpperCase()
//.toLowerCase()