import { topRatedApi } from "./../apis/movieApi";
import { movieResultTopRated } from "./../types/api";
import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";

const useTopRatedMovie = () => {
	return useQuery<AxiosResponse<movieResultTopRated>, AxiosError>("nowplaying movie", topRatedApi);
};

export default useTopRatedMovie;
