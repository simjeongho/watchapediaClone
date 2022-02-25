import { movieResultNowPlaying } from "./../types/api";
import { nowPlayingApi } from "./../apis/movieApi";
import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";

const useNowPlayingMovie = () => {
	return useQuery<AxiosResponse<movieResultNowPlaying>, AxiosError>("nowplaying movie", nowPlayingApi);
};

export default useNowPlayingMovie;
