import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from "../styles/Main.module.css"

function Main () {
    return (
        <div className={styles.Main}>
         <div className={styles.mainLogo}> 
            <div className={styles.mainSpeech}>
                <div className={styles.mainSpeech_div}>
                    Welcome to the Food Palace!</div>
                </div>
         </div>
         <div className={styles.offersContainer}>
            <div className={styles.offer1}>
                Greek Salad
                {/* <img className={styles.greek} src={require('../Images/greeksalad.jpg')} /> */}
                <div className={styles.greekSalad}></div>
              
                </div>
            <div className={styles.offer2}>
                Sandwich
                <img className={styles.sandwich} src={require('../Images/sandwich.jpg')} />
                <p className={styles.parrafo}>
                 slow-cooked, shredded pork with barbecue sauce, served on sandwich buns with various lettuce, tomato, cheese and salami.
                </p>
                </div>
            <div className={styles.offer3}>
                Chicken
                <img className={styles.chicken} src={require('../Images/pollo.jpg')} />
                <p className={styles.parrafo}>
                    Entire chicken grilled seasoned in a spice and barbecue sauce.
                </p>
            </div>
         </div>
         
        </div>
    )
}

export default Main

// tomato salad made of sliced or chopped tomatoes with a few slices of cucumber, and red onion.