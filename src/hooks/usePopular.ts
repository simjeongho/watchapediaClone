import { AxiosResponse } from "axios";
import { popularApi } from "./../apis/movieApi";
import { useQuery } from "react-query";
import { movieResultPopular } from "#types/api";

const usePopularMovie = () => {
	return useQuery<AxiosResponse<movieResultPopular>>("popular movie", popularApi);
};

export default usePopularMovie;
