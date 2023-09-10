import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { IGames } from "@/models/IGames";
import getAllGames from "@/services/getAllGames";
import { AxiosResponse } from "axios";
import Cards from "@/components/cards";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

interface IState {
  loading: boolean;
  games: IGames[];
  errorMsg: string;
}

export default function Home() {
  const [state, setState] = useState<IState>({
    loading: false,
    games: [] as IGames[],
    errorMsg: "",
  });
  const [filters, setfilters] = useState<string>("");

  useEffect(() => {
    setState({ ...state, loading: true });
    getAllGames(filters)
      .then((res: AxiosResponse<any, any>) =>
        setState({
          ...state,
          loading: false,
          games: res.data,
          
        })
        
      )
      .catch((err) =>
        setState({
          ...state,
          loading: false,
          errorMsg: err.message,
        })
      );
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      {console.log("The API data is: ", state.games)}
      <main>
        <div >
          <div></div>
        </div>

        <div className={styles.center}>
          
        </div>
        
        <div>
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={4}>
              {
              state.games.length > 0 &&
                state.games.map((gamesData) => (
                  
                      <Grid item xs={4} key={gamesData.id}>
                        <Cards 
                          title={gamesData.title}
                          short_description={gamesData.short_description}
                          thumbnail={gamesData.thumbnail}
                          release_date={gamesData.release_date}
                          game_url={gamesData.game_url}
                          genre={gamesData.genre}
                          developer={gamesData.developer}
                          />
                      </Grid>
                ))}
                 </Grid>
                </Box>
        </div>
      </main>
    </>
  );
}
