import React, { useState } from 'react';
import { Chart } from "react-google-charts";

function Exercice7() {

    const [data, setData] = useState([
      ["Evénements", "Nombre"],
      ["Tertiaire", 60],
      ["Batiment", 20],
      ["Industrie", 20]
    ]);
  
    const options = {
      title: "Evénements par secteur",
      is3D: true
    };
  
    return (
      <>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
      />
      </>
    )
  }
export default Exercice7;