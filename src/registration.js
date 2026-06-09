import { renderHome } from './main.js'
import { renderAboutCompany } from './about-company'

function isEmailCorrect() {
    const userEmail = document.querySelector("#email")
    const value = userEmail.value.trim()

    if (!value) {
        return userEmail.insertAdjacentHTML("afterend",
            `<span class="is-input-error">Поле не может быть пустым</span>`)
    }
    if (value.length > 25) {
        return userEmail.insertAdjacentHTML("afterend",
            `<span class="is-input-error">Длина не должна превышать 25 символов</span>`)
    }
    if (!value.includes("@") || !value.includes(".")) {
        return userEmail.insertAdjacentHTML("afterend",
            `<span class="is-input-error">Введённые данные не являются email</span>`)
    }
    const [local, domain] = value.split("@")
    if (!/^[A-Za-z0-9._%+-]+$/.test(local)) {
        return userEmail.insertAdjacentHTML("afterend",
            `<span class="is-input-error">Логин email содержит недопустимые символы</span>`)
    }
    if (!/^[A-Za-z0-9.-]+$/.test(domain)) {
        return userEmail.insertAdjacentHTML("afterend",
            `<span class="is-input-error">Домен email содержит недопустимые символы</span>`)
    }
    return userEmail.value
}

function isPasswordCorrect() {
    const userPassword = document.querySelector("#password")
    const value = userPassword.value.trim()

    if (!value) {
        return userPassword.insertAdjacentHTML("afterend",
            `<span class="is-input-error">Поле не может быть пустым</span>`)
    }
    if (value.length > 25 || value.length < 5) {
        return userPassword.insertAdjacentHTML("afterend",
            `<span class="is-input-error">Длина не корректна</span>`)
    }
    if (!/^[A-Za-z0-9]+$/.test(value)) {
        return userPassword.insertAdjacentHTML("afterend",
            `<span class="is-input-error">Пароль содержит недопустимые символы</span>`)
    }
    return userPassword.value
}

function isLoginCorrect() {
    const userLogin = document.querySelector("#login")
    const value = userLogin.value.trim()

    if (!value) {
        return userLogin.insertAdjacentHTML("afterend",
            `<span class="is-input-error">Поле не может быть пустым</span>`)
    }
    if (value.length > 25 || value.length < 5) {
        return userLogin.insertAdjacentHTML("afterend",
            `<span class="is-input-error">Длина не корректна</span>`)
    }
    if (!/^[A-Za-z0-9]+$/.test(value)) {
        return userLogin.insertAdjacentHTML("afterend",
            `<span class="is-input-error">Логин содержит недопустимые символы</span>`)
    }
    return userLogin.value
}

function renderRegistrationForm(container) {
    container.innerHTML = `
        <form class="registration-block">
            <label for="email">Введите email:</label>
            <input class="email-inp" id="email" type="email" placeholder="Email@email.com" autocomplete="email">
            <label for="login">Введите логин:</label>
            <input class="login-inp" id="login" type="text" placeholder="Логин" autocomplete="username">
            <label for="password">Введите пароль:</label>
            <input class="pass-inp" id="password" type="password" placeholder="Пароль" autocomplete="new-password">
            <button type="button" id="aprove-registration" class="aprove-registration">Подтвердить</button>
            <button type="button" id="log-in-btn" class="log-in-btn">Уже зарегистрированы? Войти</button>
        </form>
    `;

    document.querySelector("#aprove-registration").addEventListener("click", () => {
        document.querySelectorAll(".is-input-error").forEach(el => el.remove())

        const email = isEmailCorrect()
        const login = isLoginCorrect()
        const password = isPasswordCorrect()

        if (typeof email !== "string" || typeof login !== "string" || typeof password !== "string") return

        const userData = { Email: email, Login: login, Password: password }
        localStorage.setItem("userData", JSON.stringify(userData))

        renderProfileMenu(container, userData)

        document.querySelector("#logout-btn").addEventListener("click", () => {
            renderRegistrationForm(container)
        })
    })

    document.querySelector("#log-in-btn").addEventListener("click", () => {
        renderLoginForm(container)
    })
}

function renderLoginForm(container) {
    container.innerHTML = `
        <form class="registration-block">
            <label for="login">Введите логин:</label>
            <input class="login-inp" id="login" type="text" placeholder="Логин" autocomplete="username">
            <label for="password">Введите пароль:</label>
            <input class="pass-inp" id="password" type="password" placeholder="Пароль" autocomplete="current-password">
            <button type="button" id="aprove-login" class="aprove-registration">Войти</button>
            <button type="button" id="registration-btn" class="log-in-btn">Нет аккаунта? Зарегистрироваться</button>
        </form>
    `;

    document.querySelector("#aprove-login").addEventListener("click", () => {
        document.querySelectorAll(".is-input-error").forEach(el => el.remove())

        const login = isLoginCorrect()
        const password = isPasswordCorrect()

        if (typeof login !== "string" || typeof password !== "string") return

        const saved = localStorage.getItem("userData")
        if (!saved) return container.innerHTML = `<p>Пользователь не найден</p>`

        const userData = JSON.parse(saved)
        if (userData.Login === login && userData.Password === password) {
            
            renderProfileMenu(container, userData)

            document.querySelector("#logout-btn").addEventListener("click", () => {
                renderRegistrationForm(container)
            })
        } else {
            container.innerHTML = `<p>Неверный логин или пароль</p>`
        }
    })

    document.querySelector("#registration-btn").addEventListener("click", () => {
        renderRegistrationForm(container)
    })
}

export function registration() {
    const registrationBtn = document.querySelector("#registration")

    if (registrationBtn.dataset.listenerAdded) return
    registrationBtn.dataset.listenerAdded = "true"

    registrationBtn.addEventListener("click", () => {
        const renderMain = document.querySelector("#main-content")
        renderMain.innerHTML = `
            <button class="back-to-main">
                <img src="./icons/arrow_arrows_back_direction_left_navigation_right.svg" width="35px" height="35px">
            </button>
            <section class="registration-container"></section>
        `

        const container = document.querySelector(".registration-container")
        const saved = localStorage.getItem("userData") // проверяем есть ли пользователь

        if (saved) {
            const userData = JSON.parse(saved)
            renderProfileMenu(container, userData) // показваем профиль
        } else {
            renderRegistrationForm(container) // показываем форму
        }

        document.querySelector(".back-to-main").addEventListener("click", () => {
            renderHome()
            renderAboutCompany()
        })
    })
}

function renderProfileMenu(container, userData) {
    container.innerHTML = `
        <div class="success-block">
            <h2>Добро пожаловать, ${userData.Login}!</h2>
            <p>Email: ${userData.Email}</p>
            <button type="button" id="logout-btn" class="logout-btn">Выйти</button>
            <button type="button" id="remove-account" class="logout-btn">Удалить аккаунт</button>
        </div>
    `;

    document.querySelector("#logout-btn").addEventListener("click", () => {
        renderRegistrationForm(container)
    })

    document.querySelector("#remove-account").addEventListener("click", () => {
        renderRegistrationForm(container)
        localStorage.removeItem("userData")
    })
}