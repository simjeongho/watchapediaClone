import { AxiosError } from "axios";
import { tvResultOnTheAir } from "#types/api";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { onTheAirApi } from "#apis/tvApi";

const useOnTheAirTv = () => {
	return useQuery<AxiosResponse<tvResultOnTheAir>, AxiosError>("OnTheAir Tv", onTheAirApi);
};

export default useOnTheAirTv;
