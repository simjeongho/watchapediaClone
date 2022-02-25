import Card from "#components/card";
import Slider from "#components/slider";
import React from "react";
import { TopRatedMovieContainer, TopRatedTitle } from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useTopRatedMovie from "#hooks/useTopRated";

const TopRatedMovieSection: React.FC = () => {
	const { data, isLoading } = useTopRatedMovie();

	const getYear = (date: string) => {
		return date.split("-")[0];
	};

	return (
		<TopRatedMovieContainer>
			<TopRatedTitle>인기 순위</TopRatedTitle>
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
		</TopRatedMovieContainer>
	);
};

export default TopRatedMovieSection;
