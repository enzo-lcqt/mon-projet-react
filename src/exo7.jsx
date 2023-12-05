import React, { useState } from 'react';
import { Chart } from "react-google-charts";

function Exercice7() {
    // Déclaration de l'état 'data' pour stocker les données du graphique
    const [data, setData] = useState([
        ["Evénements", "Nombre"],
        ["Tertiaire", 10],
        ["Batiment", 10],
        ["Industrie", 10]
    ]);

    // Options de configuration du graphique
    const options = {
        title: "Evénements par secteur", // Titre du graphique
        is3D: true // Graphique en 3D
    };

    // Rendu de l'interface utilisateur
    return (
        <>
            {/* Utilisation du composant Chart pour afficher le graphique */}
            <Chart
                chartType="PieChart" // Type de graphique (camembert dans ce cas)
                data={data} // Données du graphique
                options={options} // Options de configuration
                width={"100%"} // Largeur du graphique
                height={"400px"} // Hauteur du graphique
            />
        </>
    );
}

// Export du composant Exercice7
export default Exercice7;
