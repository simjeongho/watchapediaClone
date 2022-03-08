import { AxiosError } from "axios";
import { movieResultSimilar } from "./../types/api";
import { AxiosResponse } from "axios";
import { similarApi } from "./../apis/movieApi";
import { useQuery } from "react-query";

const useSimilarMovie = (id: string) => {
	return useQuery<AxiosResponse<movieResultSimilar>, AxiosError>(["similarMovie", id], () => similarApi(id));
};

export default useSimilarMovie;
