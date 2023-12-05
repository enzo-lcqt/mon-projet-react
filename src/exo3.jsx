import { useState } from "react";

// Définition du composant Exercice3
const Exercice3 = () => {
  // Déclaration de l'état 'texte' pour stocker la valeur de l'input
  const [texte, setTexte] = useState("");
  // Déclaration de l'état 'liste' pour stocker la liste d'éléments
  const [liste, setListe] = useState([""]);
  
  // Fonction de gestion du changement dans l'input
  const handleChange = (event) => {
    // Met à jour l'état 'texte' avec la valeur de l'input
    setTexte(event.target.value);
  }

  // Fonction de gestion du clic sur le bouton "Ajouter"
  const handleClick = () => {
    // Option 1: Utilisation d'une variable temporaire (commentée)
    // let tmp = [...liste];
    // tmp.push(texte);
    // setListe(tmp);

    // Option 2: Utilisation du spread operator pour mettre à jour la liste
    setListe([...liste, texte]);
  }

  // Rendu de l'interface utilisateur
  return (
    <div>
      {/* Input pour saisir du texte, avec gestion du changement */}
      <input type="text" value={texte} onChange={handleChange} />
      {/* Bouton "Ajouter" avec gestion du clic */}
      <button onClick={handleClick}>Ajouter</button>
      <div>
        {/* Affichage de la liste d'éléments en utilisant map */}
        {liste.map((element, i) => (
          <div key={i}>
            {element}
          </div>
        ))}
      </div>
    </div>
  );
}

// Export du composant Exercice3
export default Exercice3;
