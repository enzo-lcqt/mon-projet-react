import { useState } from "react";
import axios from "axios";

// Définition du composant Exercice4
const Exercice4 = () => {
  // Déclaration de l'état 'recherche' pour stocker la valeur de l'input de recherche
  const [recherche, setRecherche] = useState("");
  // Déclaration de l'état 'liste' pour stocker les résultats de recherche
  const [liste, setListe] = useState([]);

  // Fonction de gestion du changement dans l'input de recherche
  const handleChange = (event) => {
    // Met à jour l'état 'recherche' avec la valeur de l'input
    setRecherche(event.target.value);
  }

  // Fonction de gestion du clic sur le bouton de recherche
  const handleClick = () => {
    // Appel à l'API TMDB pour récupérer les résultats de recherche
    axios
      .get(
        "http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=" +
          recherche
      )
      .then((reponse) => {
        console.log(reponse);
        // Met à jour l'état 'liste' avec les résultats de recherche
        setListe(reponse.data.results);
      });
  }

  // Rendu de l'interface utilisateur
  return (
    <div>
      {/* Input de recherche avec gestion du changement */}
      <input type="text" value={recherche} onChange={handleChange} />
      {/* Bouton de recherche avec gestion du clic */}
      <button onClick={handleClick}>Rechercher...</button>
      <div>
        {/* Affichage des résultats de recherche en utilisant map */}
        {liste.map((film, i) => (
          <div key={i}>
            <div>
              {/* Affichage du titre du film */}
              {film.title}
            </div>
            {/* Affichage de l'image du film en utilisant l'URL fournie par l'API */}
            <img src={"http://image.tmdb.org/t/p/w185" + film.poster_path} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Export du composant Exercice4
export default Exercice4;
