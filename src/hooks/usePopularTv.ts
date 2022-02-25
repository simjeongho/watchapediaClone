import { AxiosError } from "axios";
import { AxiosResponse } from "axios";
import { popularTvApi } from "./../apis/tvApi";
import { useQuery } from "react-query";
import { tvResultPopular } from "#types/api";
const usePopularTv = () => {
	return useQuery<AxiosResponse<tvResultPopular>, AxiosError>("popularTv", popularTvApi);
};

export default usePopularTv;
