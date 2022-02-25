import { AxiosError } from "axios";
import { tvResultAiringToday } from "./../types/api";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { airingTodayApi } from "#apis/tvApi";

const useAiringTodayTv = () => {
	return useQuery<AxiosResponse<tvResultAiringToday>, AxiosError>("Airing_today_tv", airingTodayApi);
};

export default useAiringTodayTv;
