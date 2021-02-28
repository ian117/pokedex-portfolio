import axios from 'axios';

const GetPokemonAllTypes = async ( setPokemonTypes ) => {
	try {
		const res = await axios.get('https://pokeapi.co/api/v2/type/');
		setPokemonTypes( res.data.results );
	} catch {
		console.error("error");
	}
}

export default GetPokemonAllTypes;