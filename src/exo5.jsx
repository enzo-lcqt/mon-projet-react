import React, { useState } from 'react';
import DataTable from "react-data-table-component";

// Définition des colonnes du tableau
const columns = [
  {
    name: <b>Nom</b>,
    selector: (row) => row.nom,
    sortable: true,
  },
  {
    name: <b>Prénom</b>,
    selector: (row) => row.prenom,
    sortable: true,
  },
  {
    name: <b>Ville</b>,
    selector: (row) => row.ville,
    sortable: true,
  }
];

// Définition du composant Exercice5
const Exercice5 = () => {
  // Déclaration de l'état 'data' pour stocker les données du tableau
  const [data, setData] = useState([
    { nom: "Booth", prenom: "Cliff", ville: "Hollywood" },
    { nom: "Lebowski", prenom: "Jeff", ville: "Los Angeles" },
    { nom: "Vega", prenom: "Vincent", ville: "Los Angeles" },
    { nom: "Kiddo", prenom: "Beatrix", ville: "El Paso" },
  ]);

  // Rendu de l'interface utilisateur
  return (
    <DataTable
      title="Tableau des Utilisateurs" // Titre du tableau
      columns={columns} // Colonnes définies précédemment
      data={data} // Données du tableau
      defaultSortFieldId={1} // Champ par défaut pour le tri
    />
  );
};

// Export du composant Exercice5
export default Exercice5;
