import '../styles/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faLineChart } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    return (
        <aside>
            <ul>
                <li><FontAwesomeIcon icon={faList} /> <span>To-Do</span> <FontAwesomeIcon icon={faChevronRight} className="chevron"/></li>
                <li><FontAwesomeIcon icon={faRunning} /> <span>Fitness</span> <FontAwesomeIcon icon={faChevronRight} className="chevron"/></li>
                <li><FontAwesomeIcon icon={faBed} /> <span>Sleep</span> <FontAwesomeIcon icon={faChevronRight} className="chevron"/></li>
                <li><FontAwesomeIcon icon={faLineChart} /> <span>Progress</span> <FontAwesomeIcon icon={faChevronRight} className="chevron"/></li>
                <li><FontAwesomeIcon icon={faGear} /> <span>Settings</span> <FontAwesomeIcon icon={faChevronRight} className="chevron"/></li>
            </ul>
        </aside>
    );
  }
  
  export default NavBar;