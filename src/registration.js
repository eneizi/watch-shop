import { renderHome } from './main.js'
import { renderAboutCompany } from './about-company'

export function registration() {
    const registrationBtn = document.querySelector("#registration")

    registrationBtn.addEventListener("click", () => {
        const renderMain = document.querySelector("#main-content")
        renderMain.innerHTML = `
        <button class="back-to-main">
            <img src="./icons/arrow_arrows_back_direction_left_navigation_right.svg" width="35px" height="35px">
        </button>
        <section class="registration-container">
            <div class="registration-block">
                <label for="login">Введите email:</label>
                <input class="login-inp" id="login" type="email" placeholder="Логин">
                <label for="login">Введите логин:</label>
                <input class="login-inp" id="login" type="text" placeholder="Логин">
                <label for="login">Введите пароль:</label>
                <input class="pass-inp" type="password" placeholder="Пароль">
                <button class="aprove-registration">Подтвердить</button>
            </div>
        </section>
        `;

        // кнопка возрата
        const backMain = document.querySelector(".back-to-main")
        backMain.addEventListener("click", () => {
            renderHome()
            renderAboutCompany()
        })
    })
}