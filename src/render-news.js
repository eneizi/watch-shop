import { renderHome } from "./main"

export function renderNews() {
    const newsSection = document.querySelector("#news")
    const onlyProducts = document.querySelector("#go-to-products")
    const renderMain = document.querySelector("#main-content")

    onlyProducts.addEventListener("click", (event) => {
        renderMain.innerHTML = `
            <p>Новостей нет</p>
        `;
    })
}