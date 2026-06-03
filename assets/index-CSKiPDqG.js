(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{img:`./site-produts/T1374101104100.jpg`,name:`Tissot`,price:5e4,id:1,description:`Описание часов — это структурированная характеристика устройства для измерения времени, которая включает в себя классификацию, особенности механизма, материалы корпуса, а также набор функциональных возможностей Описание часов — это структурированная характеристика устройства для измерения времени, которая включает в себя классификацию, особенности механизма, материалы корпуса, а также набор функциональных возможностей`},{img:`./site-produts/A159WA-N1.jpg`,name:`Casio`,price:1e4,id:2},{img:`./site-produts/71575ahtSiL._AC_SX679_.jpg`,name:`Orient`,price:3e4,id:3},{img:`./site-produts/1102-0-3-45.jpg`,name:`NIKA`,price:3e6,id:4},{img:`./site-produts/Rado3.jpg`,name:`Rado`,price:37e3,id:5},{img:`./site-produts/RADO32500328.jpg`,name:`Rado`,price:52e3,id:6},{img:`./site-produts/CITIZENNK5010-51L.jpg`,name:`Citizen`,price:45e3,id:7},{img:`./site-produts/CITIZENAN8190-51L.jpg`,name:`Citizen`,price:23200,id:8},{img:`./site-produts/SLGA009G.jpg`,name:`Grand Seiko`,price:15e5,id:9},{img:`./site-produts/Rado3.jpg`,name:`Rado`,price:1e4,id:10},{img:`./site-produts/T1374101104100.jpg`,name:`Tissot`,price:5e4,id:11},{img:`./site-produts/A159WA-N1.jpg`,name:`Casio`,price:1e4,id:12},{img:`./site-produts/71575ahtSiL._AC_SX679_.jpg`,name:`Orient`,price:3e4,id:13},{img:`./site-produts/1102-0-3-45.jpg`,name:`NIKA`,price:3e6,id:14},{img:`./site-produts/Rado3.jpg`,name:`Rado`,price:1e4,id:15},{img:`./site-produts/CITIZENNK5010-51L.jpg`,name:`Citizen`,price:45e3,id:16}];function t(){let t=document.querySelector(`#shopping-basket`),n=document.querySelector(`#main-content`);document.querySelector(`#render-main`);let r=[],i=0,a=0;document.addEventListener(`click`,t=>{let n=t.target.closest(`#buy-product`);if(!n)return;let o=n.dataset.id,s=e.find(e=>e.id==o);r.find(e=>e.id==o)||(r.push(s),i+=s.price,a++)}),t.addEventListener(`click`,()=>{n.innerHTML=``;let e=document.createElement(`section`);e.className=`shopping-basket`,n.append(e);let t=document.createElement(`div`);if(t.className=`basket-summary-container`,e.append(t),r.length===0){e.innerHTML=`
                <span class="basket-clear">Корзина пустая</span>
            `;return}t.insertAdjacentHTML(`beforeend`,`
            <div class="basket-summary">
                <p>Товаров: ${a}шт.</p>
                <p>Сумма: ${i}руб.</p>
                <button class="buyALL">Купить всё</button>
                <button class="removeALL">Отчистить корзину</button>
            </div>
        `);let o=document.createElement(`div`);o.className=`product-in-basket-container`,e.append(o),r.forEach(e=>{let t=`
                <div class="product-in-basket" data-id="${e.id}">
                    <img class="product-img" src=${e.img}>
                    <div class="produt-info-container">
                        <div class="produt-info">
                            <h3 class="product-name">${e.name}</h3>
                            <p class="product-price">${e.price}руб.</p>
                        </div>
                        <button class="buy-from-basket">Перейти к оплате</button>
                        <button data-id="${e.id}" class="remove">Удалить</button>
                    </div>
                </div>
            `;o.insertAdjacentHTML(`beforeend`,t)}),document.querySelector(`.removeALL`).addEventListener(`click`,()=>{r=[],i=0,a=0,e.innerHTML=`<span class="basket-clear">Корзина пустая</span>`}),e.addEventListener(`click`,t=>{let n=t.target.closest(`.remove`);if(!n)return;let o=n.dataset.id,s=r.findIndex(e=>e.id==o);if(s!==-1){let t=r[s];i-=t.price,a--,r.splice(s,1),n.closest(`.product-in-basket`).remove();let o=document.querySelector(`.basket-summary`);r.length>0?(o.querySelector(`p:nth-child(1)`).textContent=`Товаров: ${a}шт.`,o.querySelector(`p:nth-child(2)`).textContent=`Сумма: ${i}руб.`):e.innerHTML=`<span class="basket-clear">Корзина пустая</span>`}})})}function n(){document.querySelector(`#news`);let e=document.querySelector(`#go-to-products`),t=document.querySelector(`#main-content`);e.addEventListener(`click`,e=>{t.innerHTML=`
            <p>Новостей нет</p>
        `})}function r(){document.querySelector(`#about-company`).insertAdjacentHTML(`beforeend`,`
        <div class="about-company-content">
            <div class="about-company-text">
                <h1 class="about-company-title">Лучшие часы по лучшим ценам</h1>
                <p class="about-company-promotion">Действуют скидки</p>
            </div>
        </div>
    `)}function i(){document.querySelector(`#registration`).addEventListener(`click`,()=>{let e=document.querySelector(`#main-content`);e.innerHTML=`
        <button class="back-to-main">
            <img src="./icons/arrow_arrows_back_direction_left_navigation_right.svg" width="35px" height="35px">
        </button>
        <section class="registration-container">
            <div class="registration-block">
                <label for="email">Введите email:</label>
                <input class="email-inp" id="email" type="email" placeholder="Email">
                <label for="login">Введите логин:</label>
                <input class="login-inp" id="login" type="text" placeholder="Логин">
                <label for="login">Введите пароль:</label>
                <input class="pass-inp" type="password" placeholder="Пароль">
                <button class="aprove-registration">Подтвердить</button>
            </div>
        </section>
        `,document.querySelector(`.back-to-main`).addEventListener(`click`,()=>{c(),r()})})}function a(){let t=document.querySelector(`#main-content`);document.addEventListener(`click`,n=>{if(n.target.closest(`.buy-product`))return;let i=n.target.closest(`.product-block`);if(!i)return;let a=i.dataset.id,o=e.find(e=>e.id==a);t.innerHTML=`
        <button class="back-to-main">
            <img src="./icons/arrow_arrows_back_direction_left_navigation_right.svg" width="35px" height="35px">
        </button>
        <div class="product-card-block" data-id="${o.id}">
            <img class="product-card-img" src=${o.img}>
            <div class="product-card-info">
                <div>
                    <h3 class="product-card-name">${o.name}</h3>
                    <p class="product-card-price">${o.price}руб.</p>
                </div>
                <div class="product-card-btn-container">
                    <button data-id="${o.id}" class="product-card-buy" id="buy-product">
                        Добавить в коризну
                    </button>
                </div>
                <p class="product-card-description">
                    ${o.description?o.description:`Описания нет`}
                </p>
            </div>
        </div>
        `,document.querySelector(`.back-to-main`).addEventListener(`click`,()=>{c(),r()})})}var o=document.querySelector(`#render-main`),s=document.querySelector(`#main-content`);function c(){s.innerHTML=`
    <section class="products-news" id="news"></section>
    <section class="about-us" id="about-company"></section>
    <section class="products-container" id="products"></section>
  `;let t=document.querySelector(`#products`);for(let n=0;n<e.length;n++){let r=e[n],i=`
        <div class="product-block" data-id="${r.id}">
          <div class="product-btn-container">
            <button data-id="${r.id}" class="buy-product" id="buy-product">+</button>
          </div>
          <img class="product-img" src=${r.img}>
          <h3 class="product-name">${r.name}</h3>
          <p class="product-price">${r.price}руб.</p>
        </div>
    `;t.insertAdjacentHTML(`beforeend`,i)}document.querySelector(`#search`).addEventListener(`input`,n=>{let r=n.target.value.toLowerCase(),i=e.filter(e=>e.name.toLowerCase().includes(r));if(i.length===0)document.querySelector(`.search-clear`)||t.insertAdjacentHTML(`afterend`,`<span class="search-clear">Ничего не найдено</span>
        `);else{let e=document.querySelector(`.search-clear`);e&&e.remove()}t.innerHTML=``,i.forEach(e=>{let n=`
          <div class="product-block" data-id="${e.id}">
            <div class="product-btn-container">
              <button data-id="${e.id}" class="buy-product" id="buy-product">+</button>
            </div>
            <img class="product-img" src=${e.img}>
            <h3 class="product-name">${e.name}</h3>
            <p class="product-price">${e.price}руб.</p>
          </div>
      `;t.insertAdjacentHTML(`beforeend`,n)})})}o.addEventListener(`click`,e=>{e.preventDefault(),c(),r()}),c(),r(),a(),n(),i(),t();