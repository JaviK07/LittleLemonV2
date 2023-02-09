import styles from "../styles/Footer.module.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function Footer () {
    return (
        <footer>
            
            <div className={styles.rrssContainer}>
                <img src={require('../Images/fb.png')} className={styles.rrss} alt="fb" />
                <img src={require('../Images/ig.png')} className={styles.rrss} alt="ig" />
                <img src={require('../Images/tw.png')} className={styles.rrss} alt="tw" />  
            </div>
            
            <div>
                <Link to="#" className={styles.rrss__links}> Contact Us </Link>
                <Link to="#" className={styles.rrss__links}> About Us </Link>
            </div>
            
            
            <div className={styles.copyrigth}>Javier Kadjo ©</div>
        </footer>
    )
}

export default Footer