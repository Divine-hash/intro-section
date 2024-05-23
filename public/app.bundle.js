/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/modules/DesktopNavigation.ts
class DeskTopNavigaton {
    constructor(header) {
        this.navbar = header.querySelector('#navigation');
        this.onClickEvent = this.onClickEvent.bind(this);
        this.onKeydownEvent = this.onKeydownEvent.bind(this);
        this.navbar.addEventListener('click', this.onClickEvent);
        this.navbar.addEventListener('keydown', this.onKeydownEvent);
        console.log('DESKTOP NAIGATION');
    }
    onClickEvent({ target }) {
        let toggleBtn = target.closest('button');
        if (!toggleBtn)
            return;
        if (toggleBtn.dataset.id != 'toggle-btn')
            return;
        this.toggleMenu(toggleBtn);
    }
    onKeydownEvent(event) {
        let target = event.target;
        if (target.tagName != 'BUTTON')
            return;
        if (event.code == 'Escape' && target.getAttribute('aria-expanded') == 'true') {
            this.toggleMenu(target);
            target.focus();
        }
    }
    toggleMenu(toggleBtn) {
        if (!toggleBtn.classList.contains('showpopup')) {
            toggleBtn.classList.add('showpopup');
            toggleBtn.setAttribute('aria-expanded', 'true');
        }
        else {
            toggleBtn.classList.remove('showpopup');
            toggleBtn.setAttribute('aria-expanded', 'false');
        }
    }
    removeDeskTopListeners() {
        this.navbar.removeEventListener('click', this.onClickEvent);
    }
}

;// CONCATENATED MODULE: ./src/modules/MobileNavigation.ts
class MobileNavigation {
    constructor(header) {
        this.header = header;
        this.onClickEvent = this.onClickEvent.bind(this);
        header.addEventListener('click', this.onClickEvent);
        console.log('MOBILE NAVIGATION');
    }
    onClickEvent({ target }) {
        let btn = target.closest('[data-id]');
        if (!btn)
            return;
        this.toggleBtn(btn);
    }
    toggleBtn(btn) {
        if (btn.getAttribute('aria-expanded') == 'false') {
            btn.setAttribute('aria-expanded', 'true');
        }
        else {
            btn.setAttribute('aria-expanded', 'false');
        }
    }
    removeMobileListeners() {
        this.header.removeEventListener('click', this.onClickEvent);
    }
}

;// CONCATENATED MODULE: ./src/modules/infiniteScroll.ts
function scrollElements(scrollableElement) {
    if (!window.matchMedia('(prefered-reduced-motions: reduced)').matches) {
        animateElements(scrollableElement);
    }
}
function animateElements(elem) {
    let list = elem.querySelector('[data-id="logo-list"]');
    let elements = list.querySelectorAll('li');
    elem.setAttribute('data-animated', 'true');
    elements.forEach((element) => {
        let duplicatedItem = element.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', 'true');
        list.append(duplicatedItem);
    });
}

;// CONCATENATED MODULE: ./src/app.ts




const scrollableElement = document.querySelector('[data-id="logo-container"]');
const loaderScreen = document.querySelector('.loader-screen');
window.addEventListener('load', () => loaderScreen.classList.add('hide'));
document.addEventListener('DOMContentLoaded', init);
let desktop = null;
let mobile = null;
;
const state = {
    isMobileActivated: false,
    isDesktopActivated: false
};
function init() {
    const header = document.getElementById('header');
    window.addEventListener('resize', () => activateNavMenu(header, state));
    activateNavMenu(header, state);
    scrollElements(scrollableElement);
}
function activateNavMenu(header, state) {
    let screenWidth = document.documentElement.clientWidth;
    let maxMobileWidth = 928;
    if (screenWidth > maxMobileWidth && state.isDesktopActivated == false) {
        state.isMobileActivated = false;
        state.isDesktopActivated = true;
        desktop = new DeskTopNavigaton(header);
        if (mobile) {
            mobile.removeMobileListeners();
        }
    }
    if (screenWidth < maxMobileWidth && state.isMobileActivated == false) {
        state.isMobileActivated = true;
        state.isDesktopActivated = false;
        mobile = new MobileNavigation(header);
        if (desktop) {
            desktop.removeDeskTopListeners();
        }
    }
}

/******/ })()
;
//# sourceMappingURL=app.bundle.js.map