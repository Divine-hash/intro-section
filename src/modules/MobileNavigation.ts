export default class MobileNavigation {
  private header: HTMLElement;

  constructor(header: HTMLElement) {
    this.header = header;
    this.onClickEvent = this.onClickEvent.bind(this);

    header.addEventListener('click', this.onClickEvent);
    console.log('MOBILE NAVIGATION');
  }

  private onClickEvent({target}: MouseEvent) {
    let btn = (target as HTMLElement).closest('[data-id]') as HTMLButtonElement;
    if (!btn) return;
    this.toggleBtn(btn);
  }

  private toggleBtn(btn: HTMLButtonElement) {
    if (btn.getAttribute('aria-expanded') == 'false') {
      btn.setAttribute('aria-expanded', 'true');
    } else {
      btn.setAttribute('aria-expanded', 'false');
    }
  }

  public removeMobileListeners() {
    this.header.removeEventListener('click', this.onClickEvent);
  }
}

