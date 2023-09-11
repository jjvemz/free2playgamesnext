import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { IGames } from "@/models/IGames";
import getAllGames from "@/services/getAllGames";
import { AxiosResponse } from "axios";

import Cards from "@/components/Cards";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LoadingButton from '@mui/lab/LoadingButton';

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
  
  const [chunkSize, setChunkSize] = useState<number>(9);
  const [chunkIndex, setChunkIndex] = useState<number>(1);

  const loadItems = () => {
    setState({ ...state, loading: true });

    const startIndex = (chunkIndex - 1) * chunkSize;
    const endIndex = chunkIndex * chunkSize;
    const nextChunk = state.games.slice(startIndex, endIndex);

    if (nextChunk.length === 0) {
      setState({ ...state, loading: false });
      return;
    }

    setTimeout(() => {
      setChunkIndex(chunkIndex + 1);
      setState({ ...state, loading: false });
    }, 1000);
  };

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

  useEffect(() => {
    loadItems();
  }, [state.games]);

  const renderItems = state.games.slice(0, chunkIndex * chunkSize);
  return (
    <>
      <Head>
        <title>Free To Games API Project</title>
      </Head>
      {console.log("The chunkIndex is ", chunkIndex)}
      <main>
        <div className={styles.main}>
          <div className={styles.center}>
            <Box sx={{ width: "100%" }}>
              <Grid container spacing={4}>
                {renderItems.length > 0 &&
                  renderItems.map((gamesData) => (
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
                {state.loading && <p>Loading...</p>}
                {!state.loading && renderItems.length < state.games.length && (

                  <LoadingButton
                  size="small"
                  onClick={loadItems}
                  endIcon={<ExpandMoreIcon />}
                  loading={state.loading}
                  loadingPosition="end"
                  variant="contained"
                  >
                  <span>Load More</span>
                  </LoadingButton>
                  
                )}
              </Grid>
            </Box>
          </div>
        </div>
      </main>
    </>
  );
}
