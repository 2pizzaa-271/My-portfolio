# ✅ Задания для ученика 18.08.2025 (Refactoring :warning: :warning:)

## 1. CSS / Bootstrap
- [ ] Ты разделил CSS — это хорошо 👍, но необходимо **использовать возможности Bootstrap**  
  *(grid-система, утилитарные классы для отступов, типографики, адаптивности и т. д.)*  
- [ ] Создай отдельный файл **`new-css.md`**, куда будешь записывать все, что изучишь по CSS (в том числе про Bootstrap и динамичные стили).  

---

## 2. JavaScript — задачи
- [ ] Убрать префикс `index.html` из ссылки так, чтобы твой сайт открывался как:  
  ✅ `https://2pizzaa-271.github.io/My-portfolio/`  
  ❌ `https://2pizzaa-271.github.io/My-portfolio/index.html`  

- [ ] Переписать **навигацию (navbar)** так, чтобы она:  
  - не вела на разные страницы  
  - а **подгружала данные динамически на той же странице** (реализовать как SPA — Single Page Application)  

- [ ] Оптимизировать код страницы:  
  - Сейчас у тебя много повторяющегося кода  
  - Вынести информацию о себе в **JSON-файл**  
  - Подгружать данные с JSON в HTML с помощью JavaScript (динамическая вставка)  

---

## 3. JavaScript — изучение
Создай файл **`new-java-script.md`** и заполняй его по мере изучения тем.  

Необходимо изучить и задокументировать:
- [ ] Типы данных в JS  
- [ ] Циклы в JS (`for`, `while`, `for...of`, `for...in`)  
- [ ] Условия (`if`, `else if`, `else`, `switch`)  
- [ ] Манипуляции с DOM (`document.querySelector`, `append`, `remove`, `classList`, `setAttribute`)  
- [ ] Функции (обычные, анонимные, стрелочные, асинхронные)  
- [ ] Классы (наследование, методы, конструкторы)  

---

## 4. CSS — изучение
В файл **`new-css.md`** добавить:
- [ ] Метод динамических стилей через `:root` (CSS custom properties / переменные)  
- [ ] Основные возможности Bootstrap  
- [ ] Адаптивность через `@media`  

---

## 5. Git Workflow (ОБЯЗАТЕЛЬНО :fire:)
После выполнения всех изменений нужно оформить работу правильно через **Git**.  

Справочник 
- [git merge](https://git-scm.com/docs/git-merge)
- [git add](https://git-scm.com/docs/git-add.html#_description)
- [git commit](https://git-scm.com/docs/git-commit)
- [git checkout](https://git-scm.com/docs/git-checkout)
- [git push](https://git-scm.com/docs/git-push.html#_examples)
- [Как создать mr инфо от gitLab](https://docs.gitlab.com/user/project/merge_requests/creating_merge_requests/)
- [Поэтапрое обучение](https://ru.stackoverflow.com/questions/1249498/%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-merge-request-%D0%BD%D0%B0-gitlab-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-git-bash)

Шаги:  
```bash
git add .
git commit -m "Напиши о своих изменениях"
git checkout -b new-branch  # название ветки в стиле kebab-case (например: fix-navbar, add-json-data, optimize-css)
git push origin new-branch  # имя той ветки, которую ты создал
```



Я хочу видеть в конечном итоге твой index.html 

```html
!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mykyta Sydko - Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
    <link rel="stylesheet" href="../all-css/style.css">
    <link rel="stylesheet" href="../all-css/resume-styles.css">
    <link rel="stylesheet" href="../all-css/contact-styles.css">
</head>
<body>

<dir id="config-data-transfer"></dir>


<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.min.js" integrity="sha384-7qAoOXltbVP82dhxHAUje59V5r2YPmcdhBPg1ERo0BZlK" crossorigin="anonymous"></script>

</body>
</html>

``` 
