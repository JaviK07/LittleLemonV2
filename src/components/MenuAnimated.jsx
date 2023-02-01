import React, { useState } from "react";
import styles from "../styles/MenuAnimated.module.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 




const MenuAnimated = () => {
    const [isMenuClicked, setMenuClass] = useState(false);
    function clickEventHandler() {
        setMenuClass(true);
    }
  
    return (
      <div className={styles.Container}>
        <button onClick={()=>setMenuClass(!isMenuClicked)} className={styles.burguerMenu}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAS9JREFUSEuNVUESxCAIw/8/2p2yKgEC2ks7akGSEIacZ4jIFPEv28avdYZvnhC6/R0lTxVhyJApU7fXd0qMN/zO7DTTn9RAazMFXQm04vXYlfzligTprwt0WNkTRCRBBXi7viHCeAT+tFQtsH/JmgLLMfUkIwfA5cCYTEWObo+AxzoJ5B/Z8eoSvEBh6qqqDFdCKEyOb63RSdMk3jUaKeleQXaEmIJzQJqLu8fHsbecBeYhUL2ghavXPknQuhbxnBeKAKmoRKyw8cLsOcHOThzvM7FLDE5tv2SCFwthfcAsstZavlCK+aailMJXA7YBCcI8qMaMxc4ab3zlOEnXasluuP9U060cmaSFLuSb9HwyZ62FOz6MmlqygZA90N8qaC+0rAW8mxBI/KeyJFzHen7fq6seB8bggwAAAABJRU5ErkJggg=="/></button>
        {isMenuClicked && <div className={styles.container_links}>
                <Link to="#" className={styles.links}> Home </Link>
                <Link to="#" className={styles.links}> Menu </Link>
                <Link to="#" className={styles.links}> Contact Us </Link>
                <Link to="#" className={styles.links}> About Us </Link>  
        </div> }
      </div>
    )
}

export default MenuAnimated