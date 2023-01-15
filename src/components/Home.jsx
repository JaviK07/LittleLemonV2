import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar.jsx";
import Main from "../components/Main.jsx";
import Reserve from "../components/Reserve.jsx";
import Footer from "../components/Footer.jsx";



function Home () {
    return (
        <div className={styles.Home}> 
        
        <Navbar /> 
        <Main />
        <Reserve />
        <Footer />
        </div>
    )
}

export default Home























