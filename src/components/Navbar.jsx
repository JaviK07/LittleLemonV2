import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css"

function Navbar () {
    return (
        
          <div className={styles.navContainer}> 
                
                <span className={styles.Name}>LittleLemon</span>
                    <ul className={styles.linksContainer}>
                    <Link to="#" className={styles.links}> Home </Link>
                    <Link to="#" className={styles.links}> Menu </Link>
                    <Link to="#" className={styles.links}> Contact Us </Link>
                    <Link to="#" className={styles.links}> About Us </Link>
                    </ul>
            </div>
        
    )
}

export default Navbar