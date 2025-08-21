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
