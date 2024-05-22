import './styles.css';
import DeskTopNavigaton from './modules/DesktopNavigation';
import MobileNavigation from './modules/MobileNavigation';
import { scrollElements } from './modules/infiniteScroll';

const scrollableElement = <HTMLDivElement>document.querySelector('[data-id="logo-container"]');
const loaderScreen = <HTMLElement>document.querySelector('.loader-screen');

window.addEventListener('load', () => loaderScreen.classList.add('hide'));
document.addEventListener('DOMContentLoaded', init);

let desktop: DeskTopNavigaton | null = null;
let mobile: MobileNavigation | null = null;

interface WindowState {
  isMobileActivated:  boolean,
  isDesktopActivated: boolean,
};

const state: WindowState = {
  isMobileActivated:  false,
  isDesktopActivated: false
};

function init(): void {
  const header = <HTMLElement>document.getElementById('header');
  window.addEventListener('resize', () => activateNavMenu(header, state));
  activateNavMenu(header, state);
  scrollElements(scrollableElement);
}

function activateNavMenu(header: HTMLElement, state: WindowState) {
  let screenWidth = document.documentElement.clientWidth
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

