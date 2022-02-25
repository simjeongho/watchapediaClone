import Card from "#components/card";
import Slider from "#components/slider";
import useNowPlayingMovie from "#hooks/useNowPlaying";
import MovieDetailPage from "#pages/MovieDetail";
import { movieResultNowPlaying } from "#types/api";
import React from "react";
import { NowPlayingMovieContainer, NowPlayingTitle } from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NowPlayingMovieSection: React.FC = () => {
	const { data, isLoading } = useNowPlayingMovie();

	const getYear = (date: string) => {
		return date.split("-")[0];
	};

	const nowPlayingList2 = () => {
		data?.data.results.map((movie) => (
			<Card
				key={movie.id}
				linkUrl={`/movie/${movie.id}`}
				title={movie.title}
				year={getYear(movie.release_date)}
				posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
				voteAverage={movie.vote_average}
			></Card>
		));
	};

	const nowPlayingList = data?.data.results.map((movie) => (
		<Card
			key={movie.id}
			linkUrl={`/movie/${movie.id}`}
			title={movie.title}
			year={getYear(movie.release_date)}
			posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
			voteAverage={movie.vote_average}
		></Card>
	));

	return (
		<NowPlayingMovieContainer>
			<NowPlayingTitle>현재 상영중</NowPlayingTitle>
			{isLoading ? (
				<div>is Loading...</div>
			) : (
				<Slider>
					{data?.data.results.map((movie) => (
						<Card
							key={movie.id}
							linkUrl={`/movie/${movie.id}`}
							title={movie.title}
							year={getYear(movie.release_date)}
							posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${movie.poster_path}`}
							voteAverage={movie.vote_average}
						></Card>
					))}
				</Slider>
			)}
		</NowPlayingMovieContainer>
	);
};

export default NowPlayingMovieSection;
