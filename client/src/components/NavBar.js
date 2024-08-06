import '../styles/NavBar.css';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faLineChart } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import NavBarItem from './NavBarItem.js';

function NavBar() {
    return (
        <aside>
            <ul className="navigation">
                <li><NavBarItem redirect="/todo" icon={faList} name="To-Do"/></li>
                <li><NavBarItem redirect="/fitness" icon={faRunning} name="Fitness"/></li>
                <li><NavBarItem redirect="/sleep" icon={faBed} name="Sleep"/></li>
                <li><NavBarItem redirect="/progress" icon={faLineChart} name="Progress"/></li>
                <li><NavBarItem redirect="/settings" icon={faGear} name="Settings"/></li>
            </ul>
        </aside>
    );
  }
  
  export default NavBar;