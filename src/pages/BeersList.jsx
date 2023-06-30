import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const BeersList = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {                                
        const fecthBeers = async () => {
          try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
            console.log('response data', response.data);
            setBeers(response.data);
          } catch (error) {
            console.log('Error getting beers from API', error);
          }
        };

        fecthBeers();
    }, []);


    return(
        <div className="Beers">
             <Header />


        {beers.map((beer) => {
          return (

         <div key={beer._id}>

            <Link to={`/beers/${beer._id}`}><img src={beer.image_url} alt={beer.name} style={{ height: '100px' }} /> </Link>
            <div>
           <h2>{beer.name}</h2>   
              <p>{beer.tagline}</p>
              <p><b>Created by:</b> {beer.contributed_by}</p>

              </div>
              </div>

                      )
                    })}
                </div>
    );
};

export default BeersList;