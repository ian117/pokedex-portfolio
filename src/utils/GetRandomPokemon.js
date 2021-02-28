import axios from 'axios';

const GetRandomPokemon = async ( handlerFunction ) => {
	const url = "https://pokeapi.co/api/v2/pokemon/"
    const randomN = Math.floor(Math.random() * 100);
    let randomPoke = url + randomN.toString()
    
    try {
		const res = await axios.get(randomPoke);
		console.log( res.data);
		handlerFunction(res.data)
	} catch {
		console.error("error");
	}
}

export default GetRandomPokemon