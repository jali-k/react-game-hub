import useData from "./useData";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

const usePlatform = () => useData<Platform>("https://api.rawg.io/api/platforms/lists/parents");

export default usePlatform;