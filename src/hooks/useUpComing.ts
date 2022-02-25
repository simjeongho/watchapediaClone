import { upcomingApi } from "./../apis/movieApi";
import { movieResultUpComing } from "./../types/api";
import { AxiosResponse, AxiosError } from "axios";
import { useQuery } from "react-query";

const useUpComingMovie = () => {
	return useQuery<AxiosResponse<movieResultUpComing>, AxiosError>("upcoming movie", upcomingApi);
};

export default useUpComingMovie;
