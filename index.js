const menu = document.querySelector('.header__menu-burger')

if (menu) {
    const menuBody = document.querySelector('.menu__body')
    const headerMenu = document.querySelector('.header__menu')
    menu.addEventListener('click', function (e) {
        document.body.classList.toggle('lock')
        menu.classList.toggle('active')
        menuBody.classList.toggle('active')
        headerMenu.classList.toggle('active')
    })
}

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContent = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContent.forEach(tabContent => tabContent.classList.remove('active'))
        target.classList.add('active')
        tabs.forEach(tab => tab.classList.remove('active'))
        tab.classList.add('active')
    })
})

const swiper = new Swiper('.swiper', {
    loop: false,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});