import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css"

function Navbar () {
    return (
        <div className={styles.Navbar}>
             <div className={styles.navContainer}>
                <img src='Logo.svg'></img>
                <span className={styles.logo}>Littlelemon</span>
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