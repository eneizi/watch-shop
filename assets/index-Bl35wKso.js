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
    `)}function i(){let e=document.querySelector(`#email`),t=e.value.trim();if(!t)return e.insertAdjacentHTML(`afterend`,`<span class="is-input-error">Поле не может быть пустым</span>`);if(t.length>25)return e.insertAdjacentHTML(`afterend`,`<span class="is-input-error">Длина не должна превышать 25 символов</span>`);if(!t.includes(`@`)||!t.includes(`.`))return e.insertAdjacentHTML(`afterend`,`<span class="is-input-error">Введённые данные не являются email</span>`);let[n,r]=t.split(`@`);return/^[A-Za-z0-9._%+-]+$/.test(n)?/^[A-Za-z0-9.-]+$/.test(r)?e.value:e.insertAdjacentHTML(`afterend`,`<span class="is-input-error">Домен email содержит недопустимые символы</span>`):e.insertAdjacentHTML(`afterend`,`<span class="is-input-error">Логин email содержит недопустимые символы</span>`)}function a(){let e=document.querySelector(`#password`),t=e.value.trim();return t?t.length>25||t.length<5?e.insertAdjacentHTML(`afterend`,`<span class="is-input-error">Длина не корректна</span>`):/^[A-Za-z0-9]+$/.test(t)?e.value:e.insertAdjacentHTML(`afterend`,`<span class="is-input-error">Пароль содержит недопустимые символы</span>`):e.insertAdjacentHTML(`afterend`,`<span class="is-input-error">Поле не может быть пустым</span>`)}function o(){let e=document.querySelector(`#login`),t=e.value.trim();return t?t.length>25||t.length<5?e.insertAdjacentHTML(`afterend`,`<span class="is-input-error">Длина не корректна</span>`):/^[A-Za-z0-9]+$/.test(t)?e.value:e.insertAdjacentHTML(`afterend`,`<span class="is-input-error">Логин содержит недопустимые символы</span>`):e.insertAdjacentHTML(`afterend`,`<span class="is-input-error">Поле не может быть пустым</span>`)}function s(e){e.innerHTML=`
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
    `,document.querySelector(`#aprove-registration`).addEventListener(`click`,()=>{document.querySelectorAll(`.is-input-error`).forEach(e=>e.remove());let t=i(),n=o(),r=a();if(typeof t!=`string`||typeof n!=`string`||typeof r!=`string`)return;let c={Email:t,Login:n,Password:r};localStorage.setItem(`userData`,JSON.stringify(c)),u(e,c),document.querySelector(`#logout-btn`).addEventListener(`click`,()=>{s(e)})}),document.querySelector(`#log-in-btn`).addEventListener(`click`,()=>{c(e)})}function c(e){e.innerHTML=`
        <form class="registration-block">
            <label for="login">Введите логин:</label>
            <input class="login-inp" id="login" type="text" placeholder="Логин" autocomplete="username">
            <label for="password">Введите пароль:</label>
            <input class="pass-inp" id="password" type="password" placeholder="Пароль" autocomplete="current-password">
            <button type="button" id="aprove-login" class="aprove-registration">Войти</button>
            <button type="button" id="registration-btn" class="log-in-btn">Нет аккаунта? Зарегистрироваться</button>
        </form>
    `,document.querySelector(`#aprove-login`).addEventListener(`click`,()=>{document.querySelectorAll(`.is-input-error`).forEach(e=>e.remove());let t=o(),n=a();if(typeof t!=`string`||typeof n!=`string`)return;let r=localStorage.getItem(`userData`);if(!r)return e.innerHTML=`<p>Пользователь не найден</p>`;let i=JSON.parse(r);i.Login===t&&i.Password===n?(u(e,i),document.querySelector(`#logout-btn`).addEventListener(`click`,()=>{s(e)})):e.innerHTML=`<p>Неверный логин или пароль</p>`}),document.querySelector(`#registration-btn`).addEventListener(`click`,()=>{s(e)})}function l(){let e=document.querySelector(`#registration`);e.dataset.listenerAdded||(e.dataset.listenerAdded=`true`,e.addEventListener(`click`,()=>{let e=document.querySelector(`#main-content`);e.innerHTML=`
            <button class="back-to-main">
                <img src="./icons/arrow_arrows_back_direction_left_navigation_right.svg" width="35px" height="35px">
            </button>
            <section class="registration-container"></section>
        `;let t=document.querySelector(`.registration-container`),n=localStorage.getItem(`userData`);n?u(t,JSON.parse(n)):s(t),document.querySelector(`.back-to-main`).addEventListener(`click`,()=>{m(),r()})}))}function u(e,t){e.innerHTML=`
        <div class="success-block">
            <h2>Добро пожаловать, ${t.Login}!</h2>
            <p>Email: ${t.Email}</p>
            <button type="button" id="logout-btn" class="logout-btn">Выйти</button>
            <button type="button" id="remove-account" class="logout-btn">Удалить аккаунт</button>
        </div>
    `,document.querySelector(`#logout-btn`).addEventListener(`click`,()=>{s(e)}),document.querySelector(`#remove-account`).addEventListener(`click`,()=>{s(e),localStorage.removeItem(`userData`)})}function d(){let t=document.querySelector(`#main-content`);document.addEventListener(`click`,n=>{if(n.target.closest(`.buy-product`))return;let i=n.target.closest(`.product-block`);if(!i)return;let a=i.dataset.id,o=e.find(e=>e.id==a);t.innerHTML=`
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
        `,document.querySelector(`.back-to-main`).addEventListener(`click`,()=>{m(),r()})})}var f=document.querySelector(`#render-main`),p=document.querySelector(`#main-content`);function m(){p.innerHTML=`
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
      `;t.insertAdjacentHTML(`beforeend`,n)})})}f.addEventListener(`click`,e=>{e.preventDefault(),m(),r()}),m(),r(),d(),n(),l(),t();