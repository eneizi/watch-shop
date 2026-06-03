import { produtsData } from './market-data'

export function shoppingBasket() {
    const basketBtn = document.querySelector("#shopping-basket")
    const renderMain = document.querySelector("#main-content")
    const logotype = document.querySelector("#render-main")

    // перменные для хранения данных корзины
    let productsBasketData = []
    let ProductsSum = 0
    let ProductsCount = 0

    // логика для добавления товара в корзину
    document.addEventListener("click", (event) => {
        const btn = event.target.closest("#buy-product")
        if (!btn) return

        const productId = btn.dataset.id
        const product = produtsData.find((item) => item.id == productId)

        const alreadyInBasket = productsBasketData.find((item) => item.id == productId)
        if (alreadyInBasket) return // проверка есть ли товар в корзине

        productsBasketData.push(product)
        ProductsSum += product.price
        ProductsCount++
    })

    // отрисовываем корзину
    basketBtn.addEventListener("click", () => {
        renderMain.innerHTML = ""

        const shopingBasketSection = document.createElement("section")
        shopingBasketSection.className = "shopping-basket"
        renderMain.append(shopingBasketSection)

        const shopingBasketContainer = document.createElement("div")
        shopingBasketContainer.className = "basket-summary-container"
        shopingBasketSection.append(shopingBasketContainer)

        if (productsBasketData.length === 0) {
            shopingBasketSection.innerHTML = `
                <span class="basket-clear">Корзина пустая</span>
            `;
            return
        }

        // выводим данные о корзине
        shopingBasketContainer.insertAdjacentHTML("beforeend", `
            <div class="basket-summary">
                <p>Товаров: ${ProductsCount}шт.</p>
                <p>Сумма: ${ProductsSum}руб.</p>
                <button class="buyALL">Купить всё</button>
                <button class="removeALL">Отчистить корзину</button>
            </div>
        `)

        // создаем элемент добавленный в корзину
        const productsContainer = document.createElement("div")
        productsContainer.className = "product-in-basket-container"
        shopingBasketSection.append(productsContainer)

        productsBasketData.forEach((product) => {
            const html = `
                <div class="product-in-basket" data-id="${product.id}">
                    <img class="product-img" src=${product.img}>
                    <div class="produt-info-container">
                        <div class="produt-info">
                            <h3 class="product-name">${product.name}</h3>
                            <p class="product-price">${product.price}руб.</p>
                        </div>
                        <button class="buy-from-basket">Перейти к оплате</button>
                        <button data-id="${product.id}" class="remove">Удалить</button>
                    </div>
                </div>
            `;
            productsContainer.insertAdjacentHTML("beforeend", html)
        })

        // удаления данных коризны
        const removeALLBtn = document.querySelector(".removeALL")
        removeALLBtn.addEventListener("click", () => {
            productsBasketData = []
            ProductsSum = 0
            ProductsCount = 0
            shopingBasketSection.innerHTML = `<span class="basket-clear">Корзина пустая</span>`
        })
        
        shopingBasketSection.addEventListener("click", (event) => {
            const removeBtn = event.target.closest(".remove");
            if (!removeBtn) return;

            const productId = removeBtn.dataset.id;
            
            const productIndex = productsBasketData.findIndex(item => item.id == productId);
            
            if (productIndex !== -1) {
                const product = productsBasketData[productIndex];

                ProductsSum -= product.price;
                ProductsCount--;

                productsBasketData.splice(productIndex, 1);

                const productCard = removeBtn.closest(".product-in-basket");
                productCard.remove();

                const summary = document.querySelector(".basket-summary");
                if (productsBasketData.length > 0) {
                    summary.querySelector("p:nth-child(1)").textContent = `Товаров: ${ProductsCount}шт.`;
                    summary.querySelector("p:nth-child(2)").textContent = `Сумма: ${ProductsSum}руб.`;
                } else {
                    shopingBasketSection.innerHTML = `<span class="basket-clear">Корзина пустая</span>`;
                }
            }
        });
    })
}