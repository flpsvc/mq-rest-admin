import {Link} from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar(){
    return(
        <nav>
        <ul>
            <li><Link to="/home">home</Link></li>                                
            <li>
                <a>queue managers</a>
                <ul>
                    <li>
                        <Link to="/queue-managers/tu">TU</Link>
                    </li>
                    <li>
                        <Link to="/queue-managers/ti">TI</Link>
                    </li>
                    <li>
                        <Link to="/queue-managers/ho">HML</Link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar