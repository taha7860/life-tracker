import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavBarItem({redirect, icon, name}) {
    return (
        <>
            <Link to={redirect} className="list-item"><FontAwesomeIcon icon={icon} /> <span>{name}</span> <FontAwesomeIcon icon={faChevronRight} className="chevron"/></Link>
        </>
    );
}

export default NavBarItem;