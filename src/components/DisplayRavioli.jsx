import React, { useState } from 'react';
import Photo from '../Images/raviolis.png';
import styles from "../styles/DisplayFoods.module.css"

const DisplayRavioli = () => {
  const [isImageActive, setIsImageActive] = useState(false);
  function clickEventHandler() {
        setIsImageActive(true);
  }

  return (
    <div>
      <button onClick={()=>setIsImageActive(!isImageActive)} className={styles.displayButton}></button>
      {isImageActive && <img src={Photo} alt="Ravioli" className={styles.displayravioli} /> }
    </div>
  );
};

export default DisplayRavioli;
