export async function F2PfetchData(){
    const URL= 'GET https://www.freetogame.com/api/games'

    try{
        const response = await fetch(URL);

        const data = await response.json();
        return data;
    }catch(err){
        console.log("Error fetching data: ", err);
        throw err;
    }
}