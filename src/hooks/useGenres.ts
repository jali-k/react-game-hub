import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface FetchGenreResponse{
    count: number
    results: Genre[]
}


interface Genre {
    id: number
    name: string
}

const useGenre = ()=>{

    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    

  useEffect(() => {

    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", {signal: controller.signal})
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
       if( err instanceof CanceledError) return;
       setIsLoading(false);
         return setError(err.message);
    });
      return () => controller.abort();
  }, []);

  return {genres, error, isLoading} 
}

export default useGenre;