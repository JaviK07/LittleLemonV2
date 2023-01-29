import React, { useState } from 'react';
import Photo from '../Images/Empanada.png';
import styles from "../styles/DisplayFoods.module.css"

const DisplayEmpanada = () => {
  const [isImageActive, setIsImageActive] = useState(false);
  function clickEventHandler() {
        setIsImageActive(true);
  }

  return (
    <div>
      <button onClick={()=>setIsImageActive(!isImageActive)} className={styles.displayButton}></button>
      {isImageActive && <img src={Photo} alt="Empanada" className={styles.displayempanada} /> }
    </div>
  );
};

export default DisplayEmpanada;
