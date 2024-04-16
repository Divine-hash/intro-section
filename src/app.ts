import './styles.css';
import DeskTopNavigaton from './modules/DesktopNavigation';

document.addEventListener('DOMContentLoaded', init);

function init(): void {
  const navbar = <HTMLElement>document.getElementById('navigation');
  new DeskTopNavigaton(navbar);
}

