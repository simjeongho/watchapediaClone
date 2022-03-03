import { AxiosError } from "axios";
import { AxiosResponse } from "axios";
import { searchApi } from "./../apis/movieApi";
import { useQuery } from "react-query";
import { movieResultGetDetail } from "#types/api";

const useMovieDetail = (query: string) => {
	const queryFn = () => searchApi(query);
	return useQuery<AxiosResponse<movieResultGetDetail>, AxiosError>(["searchMovie", query], queryFn, {
		enabled: Boolean(query),
	});
};

export default useMovieDetail;
