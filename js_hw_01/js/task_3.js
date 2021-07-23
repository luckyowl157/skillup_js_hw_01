const ADMIN_PASSWORD = 'adminpass';

let password = prompt('Type password', '');
let message = '';

if(!password) {
    console.log('Отменено пользователем!');
    message = 'Отменено пользователем!'
} else if (password == ADMIN_PASSWORD) {
    message = 'Добро пожаловать!'
} else {
    message = 'Доступ запрещен, неверный пароль!'
};
alert(message);

