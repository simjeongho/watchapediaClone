import { AxiosError } from "axios";
import { AxiosResponse } from "axios";
import { detailApi } from "./../apis/movieApi";
import { useQuery } from "react-query";
import { movieResultGetDetail } from "#types/api";

const useMovieDetail = (movieid: string) => {
	const queryFn = () => detailApi(movieid);
	return useQuery<AxiosResponse<movieResultGetDetail>, AxiosError>(["MovieDetail", movieid], queryFn);
};

export default useMovieDetail;
