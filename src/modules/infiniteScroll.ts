export function scrollElements(scrollableElement: HTMLElement): void {
  if (!window.matchMedia('(prefered-reduced-motions: reduced)').matches) {
    animateElements(scrollableElement);
  }
}

function animateElements(elem: HTMLElement): void {
  let list = <HTMLUListElement>elem.querySelector('[data-id="logo-list"]');
  let elements = list.querySelectorAll('li');

  elem.setAttribute('data-animated', 'true');

  elements.forEach((element) => {
    let duplicatedItem = element.cloneNode(true) as HTMLElement;
    duplicatedItem.setAttribute('aria-hidden', 'true');
    list.append(duplicatedItem);
  });
}