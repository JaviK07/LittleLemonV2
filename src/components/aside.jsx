import styles from "../styles/Aside.module.css"

function Aside() {
    return (
    <>
    
            <img src={require('../Images/fivestars.png')} className={styles.fivestars}  alt="hola"/>
            <h2 className={styles.aside__h2}>Popular Choices</h2>
           
            <div className={styles.foodContainer}>
                <div className={styles.burguerContainer}>
                <div>
                        <h3 className={styles.burguer__h3}>Awesome Burger</h3>
                        <p className={styles.burguer__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <button className={styles.burguer__button}>Orden Now</button>
                </div>
                    <img src={require('../Images/burguer.png')} className={styles.burguerImg} alt="hola" />
                </div>
        
                <div>
                <div>    
                        <h3 className={styles.milanesa__h3}>Argentinian Milanesa</h3>
                        <p className={styles.milanesa__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <button className={styles.milanesa__button}>Orden Now</button>  
                </div>
                    <img src={require('../Images/milanga.png')} className={styles.milanesaImg} alt="hola"/>
                </div>

                {/* <div className="foods">
                        <h3 className={styles.burguer__h3}>Awesome Burger</h3>
                        <p className={styles.burguer__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <button className={styles.burguer__button}>Orden Now</button>
                    <div>
                        <img src={require('../Images/burguer.png')} className={styles.burguerImg3} alt="hola" />
                    </div>
                </div> */}


                {/* <div className="foods">
                        <h3 className={styles.burguer__h3}>Awesome Burger</h3>
                        <p className={styles.burguer__p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <button className={styles.burguer__button}>Orden Now</button>
                        <img src={require('../Images/burguer.png')} className={styles.burguerImg4} />
            </div>
                    <div className={styles.chefs}>
                        <img src={require('../Images/chefs.jpg')} className={styles.chefs} alt="hola" />
                    </div> */}
        </div>
                
    
    </>
    )
}


export default Aside