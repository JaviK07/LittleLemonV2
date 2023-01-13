import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css"

function Navbar () {
    return (
        <div className={styles.Navbar}>
          <div className={styles.navContainer}>
            <div className={styles.logoName}>
                <img className={styles.lemonLogo} src={require('../Images/Sinborde.png')} />
                <span className={styles.logo}>LittleLemon</span>
            </div>   
                <div className={styles.navItems}>
                    <div className={styles.linksContainer}>
                    <Link to="Foods" className={styles.links}> Menu </Link>
                    <Link to="#" className={styles.links}> Reservations </Link>
                    </div>
                    <button className={styles.navButton}>Sign up</button>
                    <button className={styles.navButton}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar