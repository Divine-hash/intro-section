export default class DeskTopNavigaton {
  navbar: HTMLElement;

  constructor(navbar: HTMLElement) {
    this.navbar = navbar;
    navbar.addEventListener('click', this.onClickEvent.bind(this));
  }

  private onClickEvent({target}: MouseEvent): void {
    let toggleBtn = (<HTMLButtonElement>target).closest('button');
    if (!toggleBtn) return;
    if (toggleBtn.dataset.id != 'toggle-btn') return;
    this.toggleMenu(toggleBtn);
  }

  private toggleMenu(toggleBtn: HTMLButtonElement): void {
    if (!toggleBtn.classList.contains('showpopup')) {
      toggleBtn.classList.add('showpopup');
      toggleBtn.setAttribute('aria-expanded', 'true');
    } else {
      toggleBtn.classList.remove('showpopup');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  }
}