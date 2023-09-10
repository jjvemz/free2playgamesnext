import axios from 'axios';

export default function getAllGames(filters:string){

    console.log("The process.env.XRapidAPIKey is: ",process.env.NEXT_PUBLIC_X_Rapid_API_Key)
    const method:object={
        method:'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_Rapid_API_Key,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
    }
    let GamesURL:string=`https://free-to-play-games-database.p.rapidapi.com/api/games`

    return axios.get(GamesURL, method);
}