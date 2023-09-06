// This hook is responsible for fetching the games from the API. The components(tsx s) are responsible to show a markup.

import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

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
  rating_top: number; 
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}


const useGames = (gameQuery: GameQuery) => useData<Game>("/games", {params: 
  {
    genres: gameQuery.genre?.id, 
    platforms: gameQuery.platforrm?.id, 
    ordering: gameQuery.ordering,
    search: gameQuery.searchText,
  }
}, [gameQuery]) // Pass the parameter genre which accepts the rawg api. It take as AxiosRequestConfigObject there
// Refactoring done after rafactorring commit
export default useGames;