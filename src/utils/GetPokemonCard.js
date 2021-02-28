import axios from 'axios';

const GetPokemonCard = async ( URL, handlerFunction) => {
	try {
		const res = await axios.get(URL);
		console.log( res.data);
		handlerFunction(res.data)
	} catch {
		console.error("error");
	}
}

export default GetPokemonCard