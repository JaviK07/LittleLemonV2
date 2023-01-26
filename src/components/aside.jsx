import styles from "../styles/Aside.module.css"

function Aside() {
    return (
    <aside className={styles.asideContainer}>
            <div className={styles.popularContainer}>
                <img src={require('../Images/fivestars.png')} className={styles.fivestars}  alt="hola"/>
                <h2 className={styles.aside__h2}>Popular Choices</h2>
            </div>
           
            <div className={styles.foodContainer}>
                <div className={styles.burguerContainer}>
                    <div>
                        <h3 className={styles.burguer__h3}>Awesome Burger</h3>
                        <p className={styles.burguer__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <button className={styles.burguer__button}>Orden Now</button>
                    </div>
                        <img src={require('../Images/burguer.png')} className={styles.burguerImg} alt="hola" />
                </div>
        
                <div  className={styles.milanesaContainer}>
                    <div>    
                        <h3 className={styles.milanesa__h3}>Argentinian Milanesa</h3>
                        <p className={styles.milanesa__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <button className={styles.milanesa__button}>Orden Now</button>  
                    </div>
                        <img src={require('../Images/milanga.png')} className={styles.milanesaImg} alt="hola"/>
                </div>

                <div className={styles.ravioliContainer}>
                    <div>
                        <h3 className={styles.ravioli__h3}>Ravioli Sauce</h3>
                        <p className={styles.ravioli__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <button className={styles.ravioli__button}>Orden Now</button>
                    </div>
                        <img src={require('../Images/raviolis.png')} className={styles.ravioliImg} alt="hola" />
                    
                </div>
                
                

                <div className={styles.empanadaContainer}>
                    <div>
                        <h3 className={styles.empanada__h3}>Argentinian Empanada</h3>
                        <p className={styles.empanada__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <button className={styles.empanada__button}>Orden Now</button>
                    </div>
                        <img src={require('../Images/Empanada.png')} className={styles.empanadaImg} alt="hola" />
                    
                </div>

               
            </div>    
           
    </aside>
    )
}


export default Aside