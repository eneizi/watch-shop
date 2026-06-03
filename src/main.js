import './style.css'
import "./style-reset.css"
import { productsData } from './market-data'
import { shoppingBasket } from './shopping-basket'
import { renderNews } from './render-news'
import { registration } from './registration'
import { renderAboutCompany } from './about-company'
import { renderProductOnClick } from "./click-on-product"

const logotype = document.querySelector("#render-main")
const renderMain = document.querySelector("#main-content")

export function renderHome() {
  renderMain.innerHTML = `
    <section class="products-news" id="news"></section>
    <section class="about-us" id="about-company"></section>
    <section class="products-container" id="products"></section>
  `;

  const produtsContainer = document.querySelector("#products")

  for (let i = 0; i < productsData.length; i++) {
    const product = productsData[i]
    const html = `
        <div class="product-block" data-id="${product.id}">
          <div class="product-btn-container">
            <button data-id="${product.id}" class="buy-product" id="buy-product">+</button>
          </div>
          <img class="product-img" src=${product.img}>
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">${product.price}руб.</p>
        </div>
    `;
    produtsContainer.insertAdjacentHTML("beforeend", html)
  }

  // Логика для поиска товара
  const input = document.querySelector("#search")
  input.addEventListener("input", (event) => {
    const searchValue = event.target.value.toLowerCase()
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    )

    if (filtered.length === 0) {
      if (!document.querySelector(".search-clear")) {
        produtsContainer.insertAdjacentHTML("afterend",
           `<span class="search-clear">Ничего не найдено</span>
        `)
      }
    } else {
      const searchClear = document.querySelector(".search-clear")
      if (searchClear) searchClear.remove()
    }

    produtsContainer.innerHTML = ""

    filtered.forEach((product) => {
      const html = `
          <div class="product-block" data-id="${product.id}">
            <div class="product-btn-container">
              <button data-id="${product.id}" class="buy-product" id="buy-product">+</button>
            </div>
            <img class="product-img" src=${product.img}>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}руб.</p>
          </div>
      `;
      produtsContainer.insertAdjacentHTML("beforeend", html)
    })
  })
}

// отрисовать главную страницу занаво
logotype.addEventListener("click", (event) => {
  event.preventDefault()
  renderHome()
  renderAboutCompany()
})

// отрисовать главную страницу
renderHome()
renderAboutCompany()
renderProductOnClick()

// вызывается в последнюю очередь при клике
renderNews()
registration()
shoppingBasket()