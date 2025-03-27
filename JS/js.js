let btn = document.getElementById("btn");
let signUp = document.getElementById("sign-up");
// console.log(btn);
// console.log(signUp);
btn.addEventListener("click", function () {
  btn.style.display = "none";
  signUp.style.display = "block";
});
let cl = document.getElementById("cl");
// ********************************************
// *кнопка закрытия &times окна
// console.log(cl);
cl.addEventListener("click", function () {
  btn.style.display = "block";
  signUp.style.display = "none";
});
// ********************************************
// *кнопка обнуления в форме
let cansel = document.getElementById("cansel");
// console.log(cansel);
// запускаем ф по клику
cansel.addEventListener("click", function () {
  //   получаем все нужные поля (ЭЛЕМЕНТЫ, НЕ ИХ ЗНАЧЕНИЯ) для очистки
  const inputs = document.querySelectorAll(".field");
  // Проверяем, что элементы найдены
  if (inputs.length === 0) {
    console.error("Элементы не найдены!");
    return;
  }
  // проверка
  console.log(inputs);
  // т к inputs это не массив, а коллекция элементов, то преобразуем в массив
  const arrayInputs = Array.from(inputs);
  // проверка
  console.log(arrayInputs);
  // раз-MAP-им этот массив и создадим на основании arrayInputs новый массив inputValue содержащий ЗНАЧЕНИЯ полей ввода
  const inputValue = arrayInputs.map(function (inputElem) {
    // получаем ЗНАЧЕНИЕ элемента
    const valueElem = inputElem.value;
    // обнуляем значение
    inputElem.value = "";
    // возвращаем значение элемента для массива
    return valueElem;
  });
  // выводим введенные ранее данные
  inputValue.forEach(function (valueElem) {
    // valueElem это ЗНАЧЕНИЯ элементов, т е то что введено в поле
    console.log(valueElem);
  });
  // const enteredValues = valueElem;
  // console.log(enteredValues);
});
