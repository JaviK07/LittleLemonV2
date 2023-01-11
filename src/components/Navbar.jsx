import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css"

function Navbar () {
    return (
        <div className={styles.Navbar}>
          <div className={styles.navContainer}>
            <div className={styles.logoName}>
                <img className={styles.lemonLogo} src={require('../Images/Sinborde.png')} />
                <span className={styles.logo}>Littlelemon</span>
            </div>   
                <div className={styles.navItems}>

                    <Link to="Foods"> Menu </Link>
                    <Link to="#"> Reservation </Link>
                    <button className={styles.navButton}>Sign up</button>
                    <button className={styles.navButton}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar