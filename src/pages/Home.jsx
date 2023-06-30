import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

const Home = () => {
  return (
    <nav>
			<div>
				<Link to="/beers">
					<img src={beers} alt="beers" /> <br />
					<h1>All Beers</h1>
				</Link>
			</div>

			<div>
				<Link to="/random-beer">
					<img src={randomBeer} alt="beers" /> <br />
					<h1>Random Beer</h1>
				</Link>
			</div>

			<div>
				<Link to="/new-beer">
					<img src={newBeer} alt="beers" /> <br />
					<h1>New Beer</h1>
				</Link>
			</div>
		</nav>
  );
};

export default Home;
