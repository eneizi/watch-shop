export function renderAboutCompany() {
    const anoutCompany = document.querySelector("#about-company")

    anoutCompany.insertAdjacentHTML("beforeend", `
        <div class="about-company-content">
            <div class="about-company-text">
                <h1 class="about-company-title">Лучшие часы по лучшим ценам</h1>
                <p class="about-company-promotion">Действуют скидки</p>
            </div>
        </div>
    `)
}