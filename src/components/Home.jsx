import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar.jsx";
import Main from "../components/Main.jsx";
import Aside from "./aside.jsx";
import Form from "../components/Form.jsx";
import Footer from "../components/Footer.jsx";




function Home () {
    return (
        <div className={styles.Home}> 
        
        <Navbar /> 
        <Main />
        <Aside />
        <Form />
        <Footer />
        </div>
    )
}

export default Home























