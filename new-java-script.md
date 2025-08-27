# Полный конспект JavaScript для начинающих 📚

## 1. Типы данных в JavaScript 🔢

JavaScript имеет два основных вида типов данных: **примитивные** и **объектные**.

### Примитивные типы данных

#### 1.1 Number (Число)
```javascript
let age = 25;           // Целое число
let price = 99.99;      // Число с плавающей точкой
let negative = -10;     // Отрицательное число

// Специальные числовые значения
let infinity = Infinity;    // Бесконечность
let notANumber = NaN;      // "Не число" (Not a Number)

console.log(typeof age);    // "number"
```

**Когда использовать:** для математических операций, счетчиков, индексов массивов.
**Где НЕ использовать:** для очень больших чисел (больше 2^53) - используйте BigInt.

#### 1.2 String (Строка)
```javascript
let name = "Иван";              // Двойные кавычки
let surname = 'Петров';         // Одинарные кавычки
let fullName = `${name} ${surname}`; // Шаблонная строка (backticks)

// Методы строк
console.log(name.length);       // 4 (длина строки)
console.log(name.toUpperCase()); // "ИВАН"
console.log(name.toLowerCase()); // "иван"
```

**Когда использовать:** для текста, имен, сообщений, HTML-контента.
**Особенности:** строки неизменяемы - методы создают новую строку, не изменяя исходную.

#### 1.3 Boolean (Логический тип)
```javascript
let isActive = true;
let isCompleted = false;

// Преобразование в boolean
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false (пустая строка)
console.log(Boolean("текст"));  // true
```

**Когда использовать:** для условий, флагов состояния, проверок.
**Помните:** falsy значения: `false`, `0`, `""`, `null`, `undefined`, `NaN`.

#### 1.4 Undefined
```javascript
let x;                  // undefined (переменная объявлена, но не инициализирована)
let obj = {};
console.log(obj.name);  // undefined (свойство не существует)

function test() {
    // если нет return, функция возвращает undefined
}
```

**Когда появляется:** необъявленные переменные, несуществующие свойства объектов.
**НЕ присваивайте** undefined вручную - используйте `null`.

#### 1.5 Null
```javascript
let data = null;        // Намеренно "пустое" значение

// Проверка на null
if (data === null) {
    console.log("Данные отсутствуют");
}
```

**Когда использовать:** когда нужно явно указать отсутствие значения.
**Особенность:** `typeof null` возвращает "object" (это баг в JS).

#### 1.6 Symbol
```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);   // false (каждый Symbol уникален)

// Использование в объектах
let user = {
    name: "Иван",
    [id1]: 123
};
```

**Когда использовать:** для создания уникальных ключей объектов, скрытых свойств.
**Редко используется** в повседневной разработке.

#### 1.7 BigInt
```javascript
let bigNumber = 123456789012345678901234567890n;
let anotherBig = BigInt("123456789012345678901234567890");

console.log(typeof bigNumber);  // "bigint"
```

**Когда использовать:** для работы с очень большими числами.
**Нельзя** смешивать BigInt с обычными числами без явного преобразования.

### Объектные типы данных

#### 1.8 Object (Объект)
```javascript
let person = {
    name: "Анна",
    age: 30,
    city: "Москва"
};

// Доступ к свойствам
console.log(person.name);       // "Анна"
console.log(person["age"]);     // 30

// Добавление нового свойства
person.email = "anna@mail.ru";
```

#### 1.9 Array (Массив)
```javascript
let numbers = [1, 2, 3, 4, 5];
let mixed = ["текст", 42, true, null];

// Методы массивов
numbers.push(6);        // Добавить в конец
numbers.pop();          // Удалить последний
console.log(numbers.length);  // Длина массива
```

#### 1.10 Function (Функция)
```javascript
function greet(name) {
    return `Привет, ${name}!`;
}

console.log(typeof greet);  // "function"
```

---

## 2. Циклы в JavaScript 🔄

### 2.1 Цикл for
**Используется:** когда знаете точное количество итераций.

```javascript
// Базовый синтаксис: for(инициализация; условие; шаг)
for (let i = 0; i < 5; i++) {
    console.log(`Итерация: ${i}`);
}

// Практический пример: перебор массива
let fruits = ["яблоко", "банан", "апельсин"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}. ${fruits[i]}`);
}
```

**Преимущества:** полный контроль над итерацией, можно изменять шаг.
**Недостатки:** больше кода, легко ошибиться с индексами.

### 2.2 Цикл while
**Используется:** когда неизвестно точное количество итераций.

```javascript
// Базовый while
let count = 0;
while (count < 3) {
    console.log(`Счетчик: ${count}`);
    count++;
}

// Практический пример: ввод данных до правильного ответа
let userInput = "";
while (userInput !== "exit") {
    userInput = prompt("Введите команду (exit для выхода):");
    if (userInput !== "exit") {
        console.log(`Вы ввели: ${userInput}`);
    }
}
```

**Осторожно:** можно создать бесконечный цикл, если условие никогда не станет false!

### 2.3 Цикл do...while
```javascript
let password;
do {
    password = prompt("Введите пароль (минимум 6 символов):");
} while (password.length < 6);

console.log("Пароль принят!");
```

**Когда использовать:** когда код должен выполниться минимум один раз.

### 2.4 Цикл for...of
**Используется:** для перебора значений итерируемых объектов (массивы, строки).

```javascript
let colors = ["красный", "зеленый", "синий"];

// Перебор массива
for (let color of colors) {
    console.log(`Цвет: ${color}`);
}

// Перебор строки
let word = "JavaScript";
for (let letter of word) {
    console.log(letter);
}

// С массивами объектов
let users = [
    {name: "Иван", age: 25},
    {name: "Мария", age: 30}
];

for (let user of users) {
    console.log(`${user.name} - ${user.age} лет`);
}
```

**Преимущества:** простой и читаемый синтаксис.
**НЕ используйте** с обычными объектами - только с итерируемыми.

### 2.5 Цикл for...in
**Используется:** для перебора ключей (свойств) объектов.

```javascript
let person = {
    name: "Алексей",
    age: 28,
    city: "СПб",
    job: "разработчик"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// С массивом (НЕ рекомендуется)
let numbers = [10, 20, 30];
for (let index in numbers) {
    console.log(`Индекс: ${index}, Значение: ${numbers[index]}`);
}
```

**Когда использовать:** только с объектами для получения ключей.
**НЕ используйте** с массивами - используйте `for...of` или обычный `for`.

### Управление циклами

```javascript
// break - выход из цикла
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Выходим когда i равно 5
    }
    console.log(i);  // Выведет: 0, 1, 2, 3, 4
}

// continue - пропуск итерации
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Пропускаем когда i равно 2
    }
    console.log(i);  // Выведет: 0, 1, 3, 4
}
```

---

## 3. Условия в JavaScript 🤔

### 3.1 Условие if
**Базовый синтаксис:**

```javascript
let age = 18;

if (age >= 18) {
    console.log("Вы совершеннолетний");
}

// С else
if (age >= 18) {
    console.log("Можете голосовать");
} else {
    console.log("Еще рано голосовать");
}
```

### 3.2 Множественные условия if...else if...else
```javascript
let score = 85;

if (score >= 90) {
    console.log("Отлично! Оценка: A");
} else if (score >= 80) {
    console.log("Хорошо! Оценка: B");
} else if (score >= 70) {
    console.log("Удовлетворительно. Оценка: C");
} else if (score >= 60) {
    console.log("Нужно подтянуться. Оценка: D");
} else {
    console.log("Неудовлетворительно. Оценка: F");
}
```

### 3.3 Тернарный оператор
**Краткая форма** для простых условий:

```javascript
let age = 20;
let message = age >= 18 ? "Взрослый" : "Ребенок";
console.log(message);

// Множественный тернарный (не рекомендуется для сложных случаев)
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
```

**Когда использовать:** для простых условий присваивания.
**НЕ используйте** для сложной логики - код станет нечитаемым.

### 3.4 Оператор switch
**Используется:** когда нужно сравнить одну переменную с множеством значений.

```javascript
let day = "понедельник";

switch (day) {
    case "понедельник":
        console.log("Начало рабочей недели");
        break;
    case "вторник":
    case "среда":
    case "четверг":
        console.log("Рабочий день");
        break;
    case "пятница":
        console.log("Последний рабочий день!");
        break;
    case "суббота":
    case "воскресенье":
        console.log("Выходной день");
        break;
    default:
        console.log("Неизвестный день");
}

// Без break - "провалится" дальше
let month = 2;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    // ... остальные случаи
}
```

**Важно:** всегда используйте `break`, иначе выполнение "провалится" в следующий case.
**Когда использовать:** для множественного выбора по одной переменной.
**НЕ используйте:** для сложных условий с логическими операторами.

### Логические операторы в условиях

```javascript
let age = 25;
let hasLicense = true;
let hasInsurance = false;

// И (&&) - все условия должны быть истинными
if (age >= 18 && hasLicense && hasInsurance) {
    console.log("Можете водить автомобиль");
}

// ИЛИ (||) - хотя бы одно условие должно быть истинным  
if (age < 18 || !hasLicense) {
    console.log("Вождение запрещено");
}

// НЕ (!) - инверсия логического значения
if (!hasInsurance) {
    console.log("Нужна страховка");
}

// Краткая оценка (short-circuit)
let name = user.name || "Гость";  // Если user.name пустое, используем "Гость"
```

---

## 4. Манипуляции с DOM 🌐

DOM (Document Object Model) - это способ представления HTML-документа в виде дерева объектов, с которыми можно взаимодействовать через JavaScript.

### 4.1 Поиск элементов - document.querySelector

```javascript
// Поиск по селектору CSS (возвращает ПЕРВЫЙ найденный элемент)
let title = document.querySelector('h1');
let firstButton = document.querySelector('button');
let elementById = document.querySelector('#myId');
let elementByClass = document.querySelector('.myClass');

// Поиск всех элементов по селектору
let allButtons = document.querySelectorAll('button');
let allItems = document.querySelectorAll('.item');

// Перебор найденных элементов
allButtons.forEach(button => {
    console.log(button.textContent);
});

// Более специфичные селекторы
let specificElement = document.querySelector('div.container > p.highlight');
let inputEmail = document.querySelector('input[type="email"]');
```

**Когда использовать:** 
- `querySelector` - когда нужен один (первый) элемент
- `querySelectorAll` - когда нужны все подходящие элементы

**Альтернативы:**
```javascript
// Старые методы (работают быстрее, но менее гибкие)
document.getElementById('myId');           // Только по ID
document.getElementsByClassName('myClass'); // По классу (живая коллекция)
document.getElementsByTagName('div');       // По тегу (живая коллекция)
```

### 4.2 Добавление элементов - append

```javascript
// Создание нового элемента
let newDiv = document.createElement('div');
newDiv.textContent = 'Новый элемент';
newDiv.className = 'new-item';

// Добавление в конец родительского элемента
let container = document.querySelector('.container');
container.append(newDiv);

// Добавление нескольких элементов сразу
let span1 = document.createElement('span');
let span2 = document.createElement('span');
span1.textContent = 'Первый';
span2.textContent = 'Второй';

container.append(span1, span2, 'Просто текст');

// Другие методы вставки
container.prepend(newDiv);          // В начало
container.before(newDiv);           // Перед элементом
container.after(newDiv);            // После элемента

// Устаревший метод (НЕ рекомендуется)
container.appendChild(newDiv);      // Только один элемент, только Node
```

**Практический пример - добавление элементов списка:**
```javascript
let todoList = document.querySelector('#todo-list');
let tasks = ['Купить молоко', 'Изучить JavaScript', 'Погулять'];

tasks.forEach(taskText => {
    let li = document.createElement('li');
    li.textContent = taskText;
    li.className = 'task-item';
    todoList.append(li);
});
```

### 4.3 Удаление элементов - remove

```javascript
// Удаление элемента
let elementToRemove = document.querySelector('.old-item');
if (elementToRemove) {  // Проверяем, что элемент существует
    elementToRemove.remove();
}

// Удаление всех элементов определенного класса
let oldItems = document.querySelectorAll('.old-item');
oldItems.forEach(item => item.remove());

// Очистка содержимого контейнера
let container = document.querySelector('.container');
container.innerHTML = '';  // Удаляет все содержимое
// ИЛИ
while (container.firstChild) {
    container.removeChild(container.firstChild);
}

// Устаревший способ
let parent = elementToRemove.parentNode;
parent.removeChild(elementToRemove);
```

**Практический пример - удаление задач:**
```javascript
// Добавляем кнопку удаления к каждой задаче
document.querySelectorAll('.task-item').forEach(task => {
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.onclick = () => task.remove();
    task.append(deleteBtn);
});
```

### 4.4 Работа с классами - classList

```javascript
let element = document.querySelector('.my-element');

// Добавление класса
element.classList.add('active');
element.classList.add('highlighted', 'important');  // Несколько классов

// Удаление класса
element.classList.remove('inactive');

// Переключение класса (если есть - удаляет, если нет - добавляет)
element.classList.toggle('visible');

// Проверка наличия класса
if (element.classList.contains('active')) {
    console.log('Элемент активен');
}

// Замена класса
element.classList.replace('old-class', 'new-class');
```

**Практические примеры:**
```javascript
// Переключение темы
let themeBtn = document.querySelector('#theme-toggle');
themeBtn.onclick = () => {
    document.body.classList.toggle('dark-theme');
};

// Показ/скрытие меню
let menuBtn = document.querySelector('#menu-btn');
let menu = document.querySelector('#mobile-menu');

menuBtn.onclick = () => {
    menu.classList.toggle('hidden');
    menuBtn.classList.toggle('menu-open');
};

// Активная навигация
document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
        // Убираем активный класс со всех ссылок
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        // Добавляем к текущей
        e.target.classList.add('active');
    };
});
```

### 4.5 Работа с атрибутами - setAttribute

```javascript
let image = document.querySelector('img');
let link = document.querySelector('a');
let input = document.querySelector('input');

// Установка атрибутов
image.setAttribute('src', 'new-image.jpg');
image.setAttribute('alt', 'Новое изображение');
link.setAttribute('href', 'https://example.com');
input.setAttribute('placeholder', 'Введите текст...');

// Получение атрибутов
let currentSrc = image.getAttribute('src');
let linkUrl = link.getAttribute('href');

// Удаление атрибутов
image.removeAttribute('title');

// Проверка наличия атрибута
if (input.hasAttribute('required')) {
    console.log('Поле обязательное');
}

// Работа с data-атрибутами
element.setAttribute('data-user-id', '123');
let userId = element.getAttribute('data-user-id');

// Более удобно через dataset
element.dataset.userId = '123';
let userIdFromDataset = element.dataset.userId;
```

**Практические примеры:**
```javascript
// Создание галереи изображений
let thumbnails = document.querySelectorAll('.thumbnail');
let mainImage = document.querySelector('#main-image');

thumbnails.forEach(thumb => {
    thumb.onclick = () => {
        let fullSrc = thumb.getAttribute('data-full-src');
        let alt = thumb.getAttribute('alt');
        
        mainImage.setAttribute('src', fullSrc);
        mainImage.setAttribute('alt', alt);
        
        // Убираем активный класс со всех миниатюр
        thumbnails.forEach(t => t.classList.remove('active'));
        // Добавляем к текущей
        thumb.classList.add('active');
    };
});

// Динамическое создание формы
function createFormField(type, name, placeholder) {
    let input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('required', '');
    
    return input;
}

let form = document.querySelector('#dynamic-form');
form.append(
    createFormField('text', 'username', 'Имя пользователя'),
    createFormField('email', 'email', 'Email'),
    createFormField('password', 'password', 'Пароль')
);
```

### Дополнительные DOM манипуляции

```javascript
// Изменение содержимого
element.textContent = 'Новый текст';        // Только текст
element.innerHTML = '<strong>HTML</strong>'; // HTML-разметка (осторожно с XSS!)

// Изменение стилей
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
element.style.display = 'none';

// Лучше через CSS классы
element.classList.add('red-text', 'yellow-bg', 'hidden');

// Получение размеров и позиции
let rect = element.getBoundingClientRect();
console.log(rect.width, rect.height, rect.top, rect.left);

// Прокрутка к элементу
element.scrollIntoView({ behavior: 'smooth' });
```

---

## 5. Функции в JavaScript ⚡

Функция - это блок кода, который можно вызывать многократно. Функции помогают избежать повторения кода и делают программу более структурированной.

### 5.1 Обычные функции (Function Declaration)

```javascript
// Базовый синтаксис
function greet(name) {
    return `Привет, ${name}!`;
}

// Вызов функции
let message = greet("Анна");
console.log(message); // "Привет, Анна!"

// Функция без параметров
function getCurrentTime() {
    let now = new Date();
    return now.toLocaleTimeString();
}

console.log(getCurrentTime()); // "14:30:25"

// Функция с несколькими параметрами
function calculateArea(width, height) {
    if (width <= 0 || height <= 0) {
        return "Ошибка: размеры должны быть положительными";
    }
    return width * height;
}

console.log(calculateArea(5, 3)); // 15
console.log(calculateArea(-1, 5)); // "Ошибка: размеры должны быть положительными"

// Функция с параметрами по умолчанию
function createUser(name, age = 18, city = "Москва") {
    return {
        name: name,
        age: age,
        city: city
    };
}

console.log(createUser("Иван")); 
// { name: "Иван", age: 18, city: "Москва" }

console.log(createUser("Мария", 25, "СПб")); 
// { name: "Мария", age: 25, city: "СПб" }
```

**Особенности обычных функций:**
- **Поднятие (hoisting)**: можно вызывать до объявления
- Имеют собственный контекст `this`
- Можно использовать как конструкторы с `new`

```javascript
// Hoisting - это работает!
console.log(square(5)); // 25

function square(x) {
    return x * x;
}
```

**Когда использовать:** для основной логики приложения, методов объектов, когда нужен hoisting.

### 5.2 Анонимные функции

Анонимные функции - это функции без имени. Обычно используются как значения переменных или параметры других функций.

```javascript
// Функция как значение переменной (Function Expression)
let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // 20

// Анонимная функция как параметр (callback)
let numbers = [1, 2, 3, 4, 5];

// forEach принимает анонимную функцию
numbers.forEach(function(number) {
    console.log(number * 2);
});

// map с анонимной функцией
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// Обработчик событий с анонимной функцией
document.querySelector('#my-button').onclick = function() {
    alert('Кнопка нажата!');
};

// Немедленно вызываемая функция (IIFE)
(function() {
    console.log("Эта функция выполнится сразу!");
})();

// IIFE с параметрами
(function(name) {
    console.log(`Привет, ${name}!`);
})("Мир");
```

**Когда использовать:**
- Как колбэки для событий и методов массивов
- Для одноразового использования
- В IIFE для изоляции кода
- Когда не нужно имя функции

**НЕ поднимаются** - нельзя использовать до объявления.

### 5.3 Стрелочные функции (Arrow Functions)

Современный и краткий способ записи функций, появившийся в ES6.

```javascript
// Базовый синтаксис: (параметры) => выражение
let add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Один параметр - скобки можно опустить
let square = x => x * x;
console.log(square(4)); // 16

// Без параметров - скобки обязательны
let getRandom = () => Math.random();
console.log(getRandom());

// Блок кода - нужны фигурные скобки и return
let greetUser = (name, time) => {
    let greeting;
    if (time < 12) {
        greeting = "Доброе утро";
    } else if (time < 18) {
        greeting = "Добрый день";
    } else {
        greeting = "Добрый вечер";
    }
    return `${greeting}, ${name}!`;
};

console.log(greetUser("Елена", 14)); // "Добрый день, Елена!"

// Возвращение объекта - нужны скобки
let createPoint = (x, y) => ({ x: x, y: y });
console.log(createPoint(1, 2)); // { x: 1, y: 2 }

// Использование с методами массивов
let numbers = [1, 2, 3, 4, 5];

let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

let strings = numbers.map(n => `Число: ${n}`);
console.log(strings); // ["Число: 1", "Число: 2", ...]
```

**Особенности стрелочных функций:**
```javascript
// НЕ имеют собственного this
let obj = {
    name: "Объект",
    
    // Обычная функция
    regularMethod: function() {
        console.log(this.name); // "Объект"
    },
    
    // Стрелочная функция
    arrowMethod: () => {
        console.log(this.name); // undefined (this из внешней области)
    }
};

// НЕ могут быть конструкторами
let ArrowConstructor = () => {};
// new ArrowConstructor(); // Ошибка!

// НЕ имеют arguments
function regularFunc() {
    console.log(arguments); // Работает
}

let arrowFunc = () => {
    // console.log(arguments); // Ошибка!
    // Используйте rest параметры: (...args) =>
};
```

**Когда использовать:**
-