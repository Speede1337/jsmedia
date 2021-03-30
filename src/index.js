// Выведется ли alert?
//  if ("0") {
//    alert( 'Привет' );
//  }
// Ответ: Да

// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
function oficialNameJS() {
  let result = prompt("Какое «официальное» название JavaScript?", "");

  if (result === "") {
    alert("Введите ответ!");
  }
  else if (result != String){
    alert("Введите текст");
  }
  else if (result === "ECMAScript" || result === "ecmascript") {
    alert("Верно!");
  }
  else {
    alert("Не знаете? ECMAScript!");
  }
}
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.
function checkNumber() {
  let resultNumber = prompt("Введите число", "");

  if (resultNumber === ""){
    alert("Введите ответ!");
  }
  else if (resultNumber > 0) {
    alert("1");
  } 
  else if (resultNumber == 0) {
    alert("0");
  } 
  else if (resultNumber < 0) {
    alert("-1");
  }
  else {
    alert("Только числа!");
  }
}

// Перепишите конструкцию if с использованием условного оператора '?':
// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
function changeConstruction() {
  let a = prompt("Введите первое число", "");

  let b = prompt("Введите второе число", "");

  let sum = (+a + +b < 5) ? alert('Мало') : alert('Много');
}

// Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости рекомендуется разбить код на несколько строк.
// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
function changeConstructionWithIfElse() {
  let login = prompt("Впишите Логин", "");

  let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте': 
  (login == '') ? 'Нет логина':
  (login != String) ? 'Вводите только текст':
  '';
  alert(message);
}