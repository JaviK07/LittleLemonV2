import React, { useState } from 'react';
import Photo from '../Images/milanga2.png';
import styles from "../styles/DisplayFoods.module.css"

const DisplayMilanesa = () => {
  const [isImageActive, setIsImageActive] = useState(false);
  function clickEventHandler() {
        setIsImageActive(true);
  }

  return (
    <div>
      <button onClick={()=>setIsImageActive(!isImageActive)} className={styles.displayButton}></button>
      {isImageActive && <img src={Photo} alt="Milanesa" className={styles.displaymilanesa} /> }
    </div>
  );
};

export default DisplayMilanesa;

  