import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from "../styles/Main.module.css"

function Main() {
    return (
        <div className={styles.Main}>
           <div className={styles.main__div}>
                <h1 className={styles.Greetings}>Welcome to LittleLemon Restaurant!</h1>
                <p className={styles.greetingsP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos enim quia veritatis repellat dolor blanditiis sunt</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.button1}>Reserve</button>
                    <button className={styles.button2}>Menu</button>
                </div>
            </div>
            <img src={require('../Images/limoneto.png')} className={styles.lemonImg} alt="hola" />
        </div>
    )
}

export default Main

