import React, { useState } from 'react';

const Formulaire = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };

  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };

  return (
    <div>
      <label>
        Nom:
        <input type="text" value={nom} onChange={handleNomChange} />
      </label>
      <br />
      <label>
        Prénom:
        <input type="text" value={prenom} onChange={handlePrenomChange} />
      </label>
      <br />
      <p>Bonjour {nom && `${nom} `}{prenom}</p>
    </div>
  );
};

const Compteur = () => {
  const [compteur, setCompteur] = useState(0);

  const incrementerCompteur = () => {
    setCompteur(compteur + 1);
  };

  return (
    <div>
      <button onClick={incrementerCompteur}> Compteur = {compteur}</button>
    </div>
  );
};

function ListeCoursesApp() {
  const [listeCourses, setListeCourses] = useState([]);
  const [nouvelElement, setNouvelElement] = useState('');

  const ajouterElement = () => {
    if (nouvelElement.trim() !== '') {
      setListeCourses([...listeCourses, nouvelElement]);
      setNouvelElement('');
    }
  };

  return (
    <div>
      <h2>Liste de Courses</h2>

      <div>
        <input
          type="text"
          value={nouvelElement}
          onChange={(e) => setNouvelElement(e.target.value)}
        />
        <button onClick={ajouterElement}>Ajouter</button>
      </div>

      <ul>
        {listeCourses.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <h1>Application React</h1>
      {/* Intégration du composant Formulaire */}
      <Formulaire />
      {/* Intégration du composant Compteur */}
      <Compteur />
      {/* Intégration du composant ListeCoursesApp */}
      <ListeCoursesApp />
    </div>
  );
};

export default App;
