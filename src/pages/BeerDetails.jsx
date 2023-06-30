import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const BeerDetails = () => {
    const { id } = useParams();
    const [beer, setBeer] = useState([]);
    const baseURL = 'https://ih-beers-api2.herokuapp.com/beers';




    useEffect(() => {                                
        const fecthBeer = async () => {
          try {
            const response = await axios.get(`${baseURL}/${id}`);

            setBeer(response.data);
          } catch (error) {
            console.log(error);
          }
        };

        fecthBeer();
    }, []);

    return (
        <>
			<Header />
			{beer ? (
				<>
					<div>
						{beer.image_url && <img src={beer.image_url} alt={beer.name} />}

						<h1>{beer.name}</h1>
						<h2>{beer.attenuation_level}</h2>
						<h2>{beer.tagline}</h2>
						<h2>{beer.first_brewed}</h2>
						<p>{beer.description}</p>
						<p>Created by: {beer.contributed_by}</p>
					</div>
				</>
			) : (
				<p>Beer to your table...</p>
			)}
		</>
    );
};

export default BeerDetails; 