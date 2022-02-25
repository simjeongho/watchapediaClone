import { latestTvApi } from "./../apis/tvApi";
import { AxiosError } from "axios";
import { tvResultLatest } from "./../types/api";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";

const useLatestTv = () => {
	return useQuery<AxiosResponse<tvResultLatest>, AxiosError>("TvLatestapi", latestTvApi);
};

export default useLatestTv;
