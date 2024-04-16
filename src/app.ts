import './styles.css';
import DeskTopNavigaton from './modules/DesktopNavigation';

const navbar = <HTMLElement>document.getElementById('navigation');
new DeskTopNavigaton(navbar);
