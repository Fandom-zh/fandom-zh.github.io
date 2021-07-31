document.querySelector('body').classList.remove("client-nojs");

const nav_navigation = document.querySelector('#site-navigation');

function changedropdown() {
    let active = document.querySelector('#site-navigation').classList.contains("dropdown-active");
    if (!active) {
        nav_navigation.classList.add("dropdown-active");
    } else {
        nav_navigation.classList.remove("dropdown-active");
    }
}

document.querySelector('#site-navigation').addEventListener('click', changedropdown);
