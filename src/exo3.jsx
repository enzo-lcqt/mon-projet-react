import { useState } from "react";


const Exercice3 = () => {

  const [texte, setTexte] = useState("")
  const [liste, setListe] = useState(["aa", "bb", "cc"])
  
  const handleChange = (event) => {
    setTexte(event.target.value)
  }

  const handleClick = () => {
    // let tmp = [...liste]
    // tmp.push(texte)
    // setListe(tmp)

    setListe([...liste, texte])
  }


  return (
    <div>
      <input type="text" value={texte} onChange={handleChange} />
      <button onClick={handleClick}>Ajouter</button>
      <div>
        {
          liste.map((element, i)=>(
            <div key={i}>
              {element}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Exercice3;