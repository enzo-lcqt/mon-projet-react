import { useState } from "react";


const Exercice1 = () => {

  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")

  const handleChangeNom = (event) => {
    setNom(event.target.value)
  }

  const handleChangePrenom = (event) => {
    setPrenom(event.target.value)
  }
  
  return (
    <>
      <input type="text" value={nom} onChange={handleChangeNom}/>
      <br />
      <input type="text" value={prenom} onChange={handleChangePrenom}/>
      <br />
      <span>Bonjour {prenom} {nom}</span>
    </>
  );
}

export default Exercice1;