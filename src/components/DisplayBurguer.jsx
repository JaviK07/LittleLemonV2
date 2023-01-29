import React, { useState } from 'react';
import Photo from '../Images/burguer.png';
import styles from "../styles/DisplayFoods.module.css"

const DisplayBurguer = () => {
  const [isImageActive, setIsImageActive] = useState(false);
  function clickEventHandler() {
        setIsImageActive(true);
  }

  return (
    <div>
      <button onClick={()=>setIsImageActive(!isImageActive)} className={styles.displayButton}></button>
      {isImageActive && <img src={Photo} alt="Burguer" className={styles.displayburger} /> }
    </div>
  );
};

export default DisplayBurguer;

  