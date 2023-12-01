import { useState } from "react";
import axios from "axios";


const Exercice4 = () => {

  const [recherche, setRecherche] = useState("")
  const [liste, setListe] = useState([])

  const handleChange = (event) => {
    setRecherche(event.target.value)
  }

  const handleClick = () => {
      axios
      .get("http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=" + recherche)
      .then((reponse)=>{
        console.log(reponse)
        setListe(reponse.data.results)
      })
  }


  return (
    <div>
      <input type="text" value={recherche} onChange={handleChange}/>
      <button onClick={handleClick}>Rechercher...</button>
      <div>
        {
          liste.map((film, i)=>(
              <div key={i}>
                <div>
                {film.title}
                </div>
                <img src={'http://image.tmdb.org/t/p/w185'+film.poster_path} alt="" />
              </div>
          ))
        }
      </div>
    </div>
  );
}

export default Exercice4;