import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { IGames } from "@/models/IGames";
import getAllGames from "@/services/getAllGames";
import { AxiosResponse } from "axios";

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
      <main>
        <div >
          <div></div>
        </div>

        <div className={styles.center}>
          
        </div>
        
        <div>
          <table >
            <thead>
              <tr>
                <td>Id</td>
                <td>title</td>
                <td>genre</td>
                <td>platform</td>
              </tr>
            </thead>
            <tbody>
              {state.games.length > 0 &&
                state.games.map((gamesData) => (
                  <tr key={gamesData.id}>
                    <td>{gamesData.id}</td>
                    <td>{gamesData.title}</td>
                    <td>{gamesData.genre}</td>
                    <td>{gamesData.platform}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
