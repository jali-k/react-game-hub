// This hook is responsible for fetching the games from the API. The components(tsx s) are responsible to show a markup.

import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: number,
  name: string,
  slug: string
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}


const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    

  useEffect(() => {

    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGameResponse>("/games", {signal: controller.signal})
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
       if( err instanceof CanceledError) return;
       setIsLoading(false);
         return setError(err.message);
    });
      return () => controller.abort();
  }, []);

  return {games, error, isLoading} 
}

export default useGames;