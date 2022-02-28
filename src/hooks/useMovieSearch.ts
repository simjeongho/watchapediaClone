import { AxiosError } from "axios";
import { AxiosResponse } from "axios";
import { searchApi } from "./../apis/movieApi";
import { useQuery } from "react-query";
import { movieResultSearch } from "#types/api";

const useMovieSearch = (query: string) => {
	return useQuery<AxiosResponse<movieResultSearch>, AxiosError>([`searchMovie`, query], () => searchApi(query), {
		enabled: Boolean(query),
	});
};

//option은 search query가 있을 때만 hook이 동작하도록 한다.

export default useMovieSearch;
