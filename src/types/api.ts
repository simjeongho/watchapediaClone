//upComing Result
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

export type movieResultUpComing = {
	page: string;
	results: movieResults;
	dates: movieDates;
	total_Pages: number;
	total_results: number;
};

//GetMovie Detail
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

export type movieResultGetDetail = {
	adult: boolean;
	backdrop_path: string | null;
	belongs_to_collection?: object;
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
	results: movieResults;
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
