import { movieResultLatest } from "./../types/api";
import { AxiosResponse } from "axios";
import React from "react";
import { useQuery } from "react-query";
import { latestApi } from "#apis/movieApi";
import { movieResultGetDetail } from "#types/api";
import { AxiosError } from "axios";
const useLatestMovie = () => {
	return useQuery<AxiosResponse<movieResultLatest>, AxiosError>("latestMovie", latestApi);
};

export default useLatestMovie;
