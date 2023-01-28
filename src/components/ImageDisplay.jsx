import React, { useState } from 'react';
import Photo from '../Images/burguer.png';


const ImageDisplay = () => {
  const [isImageActive, setIsImageActive] = useState(false);
  function clickEventHandler() {
        setIsImageActive(true);
  }

  return (
    <div>
      <button onClick={()=>setIsImageActive(!isImageActive)}>Activate image</button>
      {isImageActive && <img src={Photo} alt="Burguer" /> }
    </div>
  );
};

export default ImageDisplay;

  