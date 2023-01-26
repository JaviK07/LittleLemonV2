import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css"

function Navbar () {
    return (
        
          <header className={styles.headerContainer}> 
                <Link className={styles.Name}>LittleLemon</Link>
                    <nav className={styles.linksContainer}>
                    <Link to="#" className={styles.links}> Home </Link>
                    <Link to="#" className={styles.links}> Menu </Link>
                    <Link to="#" className={styles.links}> Contact Us </Link>
                    <Link to="#" className={styles.links}> About Us </Link>
                    <div className={styles.burguerMenu}>menu</div>
                    </nav>
            </header>
        
    )
}

export default Navbar