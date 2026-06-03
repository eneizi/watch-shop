import { renderHome } from './main.js'
import { renderAboutCompany } from './about-company'

export function registration() {
    const registrationBtn = document.querySelector("#registration")

    registrationBtn.addEventListener("click", () => {
        const renderMain = document.querySelector("#main-content")
        renderMain.innerHTML = `
            <section class="registration-container">
                <button class="back-to-main">Назад</button>
            </section>
        `

        // кнопка возрата
        const backMain = document.querySelector(".back-to-main")
        backMain.addEventListener("click", () => {
            renderHome()
            renderAboutCompany()
        })
    })
}