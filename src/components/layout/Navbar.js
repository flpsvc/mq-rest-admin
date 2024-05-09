import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'; // Import your CSS file for styling

const Navbar = () => {
    const [showSubMenu1, setShowSubMenu1] = useState(false);
    const [showSubMenu2, setShowSubMenu2] = useState(false);

    const toggleSubMenu1 = () => {
        setShowSubMenu1(!showSubMenu1);
        setShowSubMenu2(false);
    };

    const toggleSubMenu2 = () => {
        setShowSubMenu2(!showSubMenu2);
    };

    return (
        <nav className={styles.menu}>
            <ul>
                <li>Home</li>
                <li onMouseEnter={toggleSubMenu1} onMouseLeave={toggleSubMenu1}>Ambiente QMGRs
                    {showSubMenu1 && (
                        <ul className={styles.submenu}>
                            <li>TU</li>
                            <li onMouseEnter={toggleSubMenu2} onMouseLeave={toggleSubMenu2}>TI
                                {showSubMenu2 && (
                                    <ul className={styles.submenu}>
                                        <li><Link to="/qmgr/ti/QM.BARE.TI">QM.BARE.TI</Link></li>
                                        <li> <Link to="/qmgr/ti/QM.BVP.TI">QM.BVP.TI</Link></li>
                                        <li><Link to="/qmgr/ti/QM.CALLCENTER.TI">QM.CALLCENTER.TI</Link></li>
                                        <li><Link to="/qmgr/ti/QM.DIGITAL.TI">QM.DIGITAL.TI</Link> </li>
                                        <li><Link to="/qmgr/ti/QM.HOLDING.TI">QM.HOLDING.TI</Link></li>
                                        <li><Link to="/qmgr/ti/QM.SAUDE.TI">QM.SAUDE.TI</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li>HML</li>
                        </ul>
                    )}
                </li>
                <li>Queue Managers Status</li>
                <li>Documentação</li>
            </ul>
        </nav>
    );
};

export default Navbar;
