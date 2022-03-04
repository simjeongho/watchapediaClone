import axiosInstance from ".";
export const latestTvApi = () => axiosInstance.get("/tv/latest");

export const airingTodayApi = () => axiosInstance.get("/tv/airing_today");

export const onTheAirApi = () => axiosInstance.get(`/tv/on_the_air`);

export const popularTvApi = () => axiosInstance.get("/tv/popular");

export const topRatedTvApi = () => axiosInstance.get("/tv/top_rated");

export const detailTvApi = (tvId: string) => axiosInstance.get(`/tv/${tvId}`);

export const similarTvApi = (tvId: string) => axiosInstance.get(`/tv/${tvId}/similar`);

export const searchTvApi = (query: string) => axiosInstance.get(`/search/tv?/query=${query}`);
