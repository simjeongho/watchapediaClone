import { AxiosError } from "axios";
import { AxiosResponse } from "axios";
import { topRatedTvApi } from "./../apis/tvApi";
import { useQuery } from "react-query";
import { tvResultTopRated } from "#types/api";

const useTopRatedTv = () => {
	return useQuery<AxiosResponse<tvResultTopRated>, AxiosError>("TopRated Tv", topRatedTvApi);
};

export default useTopRatedTv;
