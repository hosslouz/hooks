import React,{ useState }  from 'react'
import Filter from './Filter'
import {Link} from  'react-router-dom' 

function MovieList({movies}) {
    const [filter, setFilter] = useState("");

	const getFilter = (valueFilter)=>{
		setFilter(valueFilter)
	  };


  return (
    <div>
        

        <div className="card" style={{width: "18rem",color:"black"}}>
           
        {movies.map((movies) =>
 
        <div className="card" style={{width: "18rem",color:"black"}} key={movies.Title}>
        <img className="card-img-top" src={movies.PosterURL} alt="movie"/>
        <div className="card-body">
        <h5 className="card-title">{movies.Title}</h5>
        <h5 className="card-id">{movies.id}</h5>
        <p className="card-text">{movies.Description}</p>
        <p className="card-text">{movies.rate}</p>   
        <br/>
       
    </div> 
    </div>  
          )}
    
      
    </div>
    </div>
  )
}

export default MovieList;