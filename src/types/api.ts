import { NoSubstitutionTemplateLiteral } from "typescript";

export type movieApi = {
	page: string;
	total_results: number;
	total_pages: number;
};
export type movieResults = {
	poster_path: string | null;
	adult: boolean;
	overview: string;
	release_date: string;
	genre_ids: number[];
	id: number;
	original_title: string;
	original_language: string;
	title: string;
	backdrop_path: string | null;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
};

export type movieDates = {
	maximum: string;
	minimum: string;
};

export type movieGenres = {
	id: number;
	name: string;
};
export type movieProductionCompanies = {
	name: string;
	id: number;
	logo_path: string;
	origin_country: string;
};

export type movieProductionCountries = {
	iso_3166_1: string;
	name: string;
};

export type movieSpokenLanguage = {
	iso_639_1: string;
	name: string;
};
//upComing Result
export type movieResultUpComing = {
	page: string;
	results: movieResults[];
	dates: movieDates;
	total_Pages: number;
	total_results: number;
};

//GetMovie Detail
export type movieResultGetDetail = {
	adult: boolean;
	backdrop_path: string | null;
	belongs_to_collection?: object;
	budget: number;
	genres: movieGenres[];
	homepage: string | null;
	id: number;
	imdb_id: string | null;
	original_language: string;
	original_title: string;
	overview: string | null;
	popularity: number;
	poster_path: string | null;
	production_companies: movieProductionCompanies[];
	production_countries: movieProductionCountries[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: movieSpokenLanguage[];
	status: string;
	tagline: string | null;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};
//get similar api
export type movieResultSimilar = {
	page: number;
	results: movieResults[];
	total_pages: number;
	total_results: number;
};

//latest api
export type movieResultLatest = {
	adult: boolean;
	backdrop_path: string | null;
	belongs_to_collection: null;
	budget: number;
	genres: movieGenres;
	homepage: string | null;
	id: number;
	imdb_id: string | null;
	original_language: string;
	original_title: string;
	overview: string | null;
	popularity: number;
	poster_path: string | null;
	production_companies: movieProductionCompanies;
	production_countries: movieProductionCountries;
	release_date: string;
	revenue: number;
	runtime: number | null;
	spoken_languages: Array<Object>;
	status: string;
	tagline: string | null;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

//popular api
export type movieResultPopular = {
	page: number;
	results: movieResults[];
	total_results: number;
	total_pages: number;
};
//nowPlayingApi
export type movieResultNowPlaying = {
	page: number;
	results: movieResults[];
	dates: movieDates;
	total_results: number;
	total_pages: number;
};
//topRatedApi
export type movieResultTopRated = {
	page: number;
	results: movieResults[];
	total_results: number;
	total_pages: number;
};

//Movie Search
export type movieResultSearch = {
	page: number;
	results: movieResults[];
	total_results: number;
	total_pages: number;
};

//TV API
export type tvGenre = {
	id: number;
	name: string;
};

export type tvNetworks = {
	id: number;
	name: string;
};

export type tvSeasons = {
	air_date: string;
	episode_count: number;
	id: number;
	poster_path: string | null;
	season_number: number;
};

export type tvResult = {
	poster_path: string | null;
	popularity: number;
	id: number;
	backdrop_path: string | null;
	vote_average: number;
	overview: string;
	first_air_date: string;
	origin_country: string[];
	genre_ids: number[];
	original_language: string;
	vote_count: number;
	name: string;
	original_name: string;
};

//TV Latest
export type tvResultLatest = {
	backdrop_path: string | null;
	created_by: object[];
	episode_run_time: number[];
	first_air_date: string;
	genres: tvGenre[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	name: string;
	networks: tvNetworks[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: null | string;
	popularity: number;
	poster_path: string;
	production_companies: object[];
	seasons: tvSeasons[];
	status: string;
	type: string;
	vote_average: number;
	vote_count: number;
};

//AiringToday
export type tvResultAiringToday = {
	page: number;
	results: tvResult[];
	total_result: number;
	total_pages: number;
};

//Onthe Air
export type tvResultOnTheAir = {
	page: number;
	results: tvResult[];
	total_results: number;
	total_pages: number;
};

//Popular Tv
export type tvResultPopular = {
	page: number;
	results: tvResult[];
	total_results: number;
	total_pages: number;
};
//toprated tv
export type tvResultTopRated = {
	page: number;
	results: tvResult[];
	total_results: number;
	total_pages: number;
};
