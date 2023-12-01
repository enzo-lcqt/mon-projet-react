import { useState } from "react";


const Exercice2 = () => {

  const [compteur, setCompteur] = useState(0)

  const handleClick = () => {
    setCompteur(compteur + 1)
  }
  
  return (
    <div>
      <button onClick={handleClick}>Compteur = {compteur}</button>
    </div>
  );
}

export default Exercice2;