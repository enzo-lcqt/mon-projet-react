import { useState } from "react";

// Définition du composant Exercice2
const Exercice2 = () => {
  // Déclaration de l'état 'compteur' avec la fonction de mise à jour correspondante,
  // initialisé à 0
  const [compteur, setCompteur] = useState(0);

  // Fonction de gestion du clic sur le bouton
  const handleClick = () => {
    // Met à jour l'état 'compteur' en incrémentant sa valeur actuelle de 1
    setCompteur(compteur + 1);
  }
  
  // Rendu de l'interface utilisateur
  return (
    <div>
      {/* Bouton avec gestion du clic, affiche la valeur actuelle du compteur */}
      <button onClick={handleClick}>Compteur = {compteur}</button>
    </div>
  );
}

// Export du composant Exercice2
export default Exercice2;
