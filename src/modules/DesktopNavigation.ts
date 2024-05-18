export default class DeskTopNavigaton {
  private navbar: HTMLElement;

  constructor(header: HTMLElement) {
    this.navbar = <HTMLElement>header.querySelector('#navigation');
    this.onClickEvent = this.onClickEvent.bind(this);
    this.onKeydownEvent = this.onKeydownEvent.bind(this);

    this.navbar.addEventListener('click', this.onClickEvent);
    this.navbar.addEventListener('keydown', this.onKeydownEvent);
    console.log('DESKTOP NAIGATION');
  }

  private onClickEvent({target}: MouseEvent): void {
    let toggleBtn = (<HTMLElement>target).closest('button');
    if (!toggleBtn) return;
    if (toggleBtn.dataset.id != 'toggle-btn') return;
    this.toggleMenu(toggleBtn);
  }

  private onKeydownEvent(event: KeyboardEvent) {
    let target = <HTMLElement>event.target;
    if (target.tagName != 'BUTTON') return;
    if (event.code == 'Escape' && target.getAttribute('aria-expanded') == 'true') {
      this.toggleMenu(target as HTMLButtonElement);
      target.focus();
    }
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

  public removeDeskTopListeners() {
    this.navbar.removeEventListener('click', this.onClickEvent);
  }
}