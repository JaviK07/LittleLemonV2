import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from "../styles/Main.module.css"

function Main() {
    return (
        <main className={styles.Main}>
                <div className={styles.svg}>
                    <svg width="1918" height="667" viewBox="0 0 1918 667" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1262.95 598.075C805.253 773.168 319.502 546.96 -1 648.805V-3H1918V365.946C1840.26 365.946 1771.54 395.003 1703.33 422.057C1566.4 476.363 1602.51 468.175 1262.95 598.075Z" fill="#FDD000"/>
                    <path d="M1262.95 598.075C805.253 773.168 319.502 546.96 -1 648.805V-3H1918V365.946C1840.26 365.946 1771.54 395.003 1703.33 422.057C1566.4 476.363 1602.51 468.175 1262.95 598.075Z" fill="#FDD000" fill-opacity="0.5"/>
                    </svg>
            </div>
          
            
        </main>
    )
}

export default Main

