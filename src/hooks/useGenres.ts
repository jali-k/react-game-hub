
import genres from "../data/genres";
import useData from "./useData";


export interface Genre {
    id: number
    name: string
    image_background: string
}

// const useGenre = () => useData<Genre>("/genres")
const useGenre = () => ({data: genres, error: null, isLoading: false })

export default useGenre;