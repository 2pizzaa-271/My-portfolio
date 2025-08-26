    const content = document.getElementById("content")

    // функция для подключения CSS под конкретную страницу
    function loadCSS(file) {
    // удаляем предыдущие page-specific стили
    document
        .querySelectorAll("link[data-page-style]")
        .forEach((el) => el.remove())

    if (file) {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = `../all.css/${file}`
        link.setAttribute("data-page-style", "true")
        document.head.appendChild(link)
    }
    }

    // функция загрузки страницы
    async function loadPage(page) {
    try {
        const response = await fetch(`./${page}`)
        if (!response.ok) throw new Error("Page not found")
        const html = await response.text()
        content.innerHTML = html

        // подсветка активного меню
        document
        .querySelectorAll(".nav-link")
        .forEach((link) => link.classList.remove("active"))
        document.querySelector(`[data-page="${page}"]`).classList.add("active")

        // подключаем CSS для конкретной страницы
        if (page === "resume.html") {
        loadCSS("resume-styles.css")
        } else if (page === "contact.html") {
        loadCSS("contact-styles.css")
        } else {
        loadCSS(null) // только общий style.css
        }

        // обновляем URL (например #resume)
        history.pushState({ page }, "", `#${page.replace(".html", "")}`)
    } catch (err) {
        content.innerHTML = "<h1>404</h1><p>Page not found</p>"
    }
    }

    // обработка кликов по меню
    document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", (e) => {
        e.preventDefault()
        const page = link.dataset.page
        loadPage(page)
        })
    })

    // при навигации назад/вперёд
    window.addEventListener("popstate", (e) => {
        const page = e.state?.page || "about.html"
        loadPage(page)
    })

    // загружаем стартовую страницу (по хэшу или по умолчанию)
    const initialPage = location.hash
        ? location.hash.replace("#", "") + ".html"
        : "about.html"
    loadPage(initialPage)
    })
