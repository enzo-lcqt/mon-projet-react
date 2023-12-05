import { useState } from "react";

// Définition du composant Exercice1
const Exercice1 = () => {
  // Déclaration des états 'nom' et 'prenom' avec les fonctions de mise à jour correspondantes
  const [nom, setNom] = useState("");      // État pour stocker le nom
  const [prenom, setPrenom] = useState(""); // État pour stocker le prénom

  // Fonction de gestion du changement pour le champ du nom
  const handleChangeNom = (event) => {
    setNom(event.target.value); // Met à jour l'état 'nom' avec la valeur du champ de saisie
  }

  // Fonction de gestion du changement pour le champ du prénom
  const handleChangePrenom = (event) => {
    setPrenom(event.target.value); // Met à jour l'état 'prenom' avec la valeur du champ de saisie
  }
  
  // Rendu de l'interface utilisateur
  return (
    <>
      {/* Champ de saisie pour le nom avec gestion du changement */}
    votre nom :  <input type="text" value={nom} onChange={handleChangeNom}/>
      <br />
      
      {/* Champ de saisie pour le prénom avec gestion du changement */}
    votre prenom :  <input type="text" value={prenom} onChange={handleChangePrenom}/>
      <br /><br></br>

      {/* Affichage du message de salutation avec les valeurs actuelles de 'prenom' et 'nom' */}
      <span>Bonjour {prenom} {nom}</span>
    </>
  );
}

// Export du composant Exercice1
export default Exercice1;
