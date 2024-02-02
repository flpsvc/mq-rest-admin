import {Link} from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar({name, type, depth}){
    return(
        <ul className={styles.list}>
            <li className={styles.item}>
            <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
            <Link to="/queue-managers">queue managers</Link>
            </li>
            <li className={styles.item}>
            <Link to="/queues">queues</Link>
            </li>
            <li className={styles.item}>
            <Link to="/channels">channels</Link>
            </li>
      </ul>
    )
}

export default Navbar