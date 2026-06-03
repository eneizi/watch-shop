import { produtsData } from './market-data'
import { renderHome } from './main'
import { renderAboutCompany } from './about-company'

export function renderProductOnClick() {
    const renderMain = document.querySelector("#main-content")

    document.addEventListener("click", (event) => {
        if (event.target.closest(".buy-product")) return

        const block = event.target.closest(".product-block")
        if (!block) return

        const productId = block.dataset.id
        const product = produtsData.find((item) => item.id == productId)

        renderMain.innerHTML = `
        <button class="back-to-main">
            <img src="./icons/arrow_arrows_back_direction_left_navigation_right.svg" width="35px" height="35px">
        </button>
        <div class="product-card-block" data-id="${product.id}">
            <img class="product-card-img" src=${product.img}>
            <div class="product-card-info">
                <div>
                    <h3 class="product-card-name">${product.name}</h3>
                    <p class="product-card-price">${product.price}руб.</p>
                </div>
                <div class="product-card-btn-container">
                    <button data-id="${product.id}" class="product-card-buy" id="buy-product">
                        Добавить в коризну
                    </button>
                </div>
                <p class="product-card-description">
                    ${product.description ? product.description : "Описания нет"}
                </p>
            </div>
        </div>
        `;

        const backMain = document.querySelector(".back-to-main")
        backMain.addEventListener("click", () => {
            renderHome()
            renderAboutCompany()
        })
    })
}