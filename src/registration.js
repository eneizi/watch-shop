import { renderHome } from './main.js'
import { renderAboutCompany } from './about-company'

export function registration() {
    const registrationBtn = document.querySelector("#registration")

    registrationBtn.addEventListener("click", () => {
        const renderMain = document.querySelector("#main-content")
        renderMain.innerHTML = `
            <section class="registration-container">
                <button class="back-to-main">
                    <img src="src/assets/icons/arrow_arrows_back_direction_left_navigation_right.svg" width="35px" height="35px">
                </button>
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