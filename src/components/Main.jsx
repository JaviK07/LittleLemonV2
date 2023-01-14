import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from "../styles/Main.module.css"

function Main() {
    return (
        <div className={styles.Main}>
            <div className={styles.mainLogo}>
                <div className={styles.mainSpeech}>
                    <div className={styles.mainSpeech_div}>
                        Welcome to the Food Palace!
                    </div>
                </div>
            </div>
            <div className={styles.offersContainer}>
                <h2 className={styles.parrafo1}>Greek Salad</h2>
                <div className={styles.offer1}>
                    <div>
                        <p className={styles.parrafo}>
                            tomato salad made of sliced or chopped tomatoes with a few slices of cucumber, and red onion.
                        </p>
                        <div className={styles.greekSalad}></div>
                    </div>

                </div>
                <h2 className={styles.parrafo1}>Sandwich</h2>
                <div className={styles.offer2}>

                    <div>
                        <div>
                            <p className={styles.parrafo}>
                                slow-cooked, shredded pork with barbecue sauce, served on sandwich buns with various lettuce, tomato, cheese and salami.
                            </p>
                            <div className={styles.sandwich}></div>
                        </div>
                    </div>
                </div>

                <h2 className={styles.parrafo1}>Sandwich</h2>
                <div className={styles.offer3}>
                    <div>
                        <p className={styles.parrafo}>
                            Entire chicken grilled seasoned in a spice and barbecue sauce.
                        </p>
                        <div className={styles.chicken}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main

