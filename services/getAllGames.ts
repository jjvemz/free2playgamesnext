import axios from 'axios';

export default function getAllGames(filters:string){

    const method:object={
        method:'GET',
        headers: {
            'X-RapidAPI-Key': process.env.XRapidAPIKey,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
    }
    let GamesURL:string=`https://free-to-play-games-database.p.rapidapi.com/api/games`

    return axios.get(GamesURL, method);
}