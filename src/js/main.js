const
    arrowDown = Array.from(document.getElementsByClassName('arrow__down')),
    menuItems = Array.from(document.getElementsByClassName('menu__item')),
    menuChildren = Array.from(document.querySelectorAll('#nav li')),
    menuSlider = document.getElementById('arrow__left'),
    nav = document.getElementById('nav');

menuChildren.forEach(function (menuItem) {
    menuItem.onclick = function () {
        if (this.querySelector('ul')) {
            this.querySelector('ul').classList.toggle('open')
        }
    }
});

arrowDown.forEach(function (arrow__Down) {
    arrow__Down.onclick = function (e) {
        e.stopPropagation();
        this.parentElement.querySelector('ul').classList.toggle('open')
    }
});

menuItems.forEach(function (dropDown) {
    dropDown.onclick = function () {
        this.nextElementSibling.classList.toggle('open')
    }
});

menuItems.forEach(function (menuItem) {
    menuItem.onclick = function () {
        menuItems.forEach(function (menuItem) {
            if(menuItem.classList.contains('active')) {
                menuItem.classList.remove('active')
            }
        });
        this.classList.add('active');
    }
})

menuSlider.onclick = function () {
    nav.classList.toggle('nav__close')
}