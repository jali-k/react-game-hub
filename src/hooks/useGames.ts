// This hook is responsible for fetching the games from the API. The components(tsx s) are responsible to show a markup.

import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";

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


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>("/games", {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id]) // Pass the parameter genre which accepts the rawg api. It take as AxiosRequestConfigObject there

export default useGames;