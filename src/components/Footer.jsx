import styles from "../styles/Footer.module.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function Footer () {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContainer__div}>
                <div className={styles.rrssContainer}>
                    <a href="https://facebook.com" target='_blank'>
                        <img src={require('../Images/fb.png')} className={styles.rrss} alt="fb" />
                    </a>
                    <a href="https://instagram.com" target='_blank'>
                        <img src={require('../Images/ig.png')} className={styles.rrss} alt="ig" />
                    </a>

                    <a href="https://twitter.com" target='_blank'>
                        <img src={require('../Images/tw.png')} className={styles.rrss} alt="tw" />  
                    </a>
                </div>
            
                <div className={styles.contactContainer}>
                    <Link to="#" className={styles.contactContainer__links}> Contact Us </Link>
                    <Link to="#" className={styles.contactContainer__links}> About Us </Link>
                </div>
            
            
                
            </div>
            <div className={styles.copyrigth}>Javier Kadjo ©</div>
        </footer>
    )
}

export default Footer