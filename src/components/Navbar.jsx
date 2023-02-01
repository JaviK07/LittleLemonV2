import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from "../styles/Navbar.module.css"
import MenuAnimated from "./MenuAnimated.jsx";

function Navbar () {
    return (
        
          <header className={styles.headerContainer}> 
                <Link className={styles.Name}>LittleLemon</Link>
                    <nav className={styles.linksContainer}>
                    <Link to="#" className={styles.links}> Home </Link>
                    <Link to="#" className={styles.links}> Menu </Link>
                    <Link to="#" className={styles.links}> Contact Us </Link>
                    <Link to="#" className={styles.links}> About Us </Link>
                    {/* <button className={styles.burguerMenu}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAS9JREFUSEuNVUESxCAIw/8/2p2yKgEC2ks7akGSEIacZ4jIFPEv28avdYZvnhC6/R0lTxVhyJApU7fXd0qMN/zO7DTTn9RAazMFXQm04vXYlfzligTprwt0WNkTRCRBBXi7viHCeAT+tFQtsH/JmgLLMfUkIwfA5cCYTEWObo+AxzoJ5B/Z8eoSvEBh6qqqDFdCKEyOb63RSdMk3jUaKeleQXaEmIJzQJqLu8fHsbecBeYhUL2ghavXPknQuhbxnBeKAKmoRKyw8cLsOcHOThzvM7FLDE5tv2SCFwthfcAsstZavlCK+aailMJXA7YBCcI8qMaMxc4ab3zlOEnXasluuP9U060cmaSFLuSb9HwyZ62FOz6MmlqygZA90N8qaC+0rAW8mxBI/KeyJFzHen7fq6seB8bggwAAAABJRU5ErkJggg=="/></button> */}
                    <MenuAnimated />
                    </nav>

            </header>
        
    )
}

export default Navbar