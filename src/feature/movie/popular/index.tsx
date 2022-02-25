import Card from "#components/card";
import Slider from "#components/slider";
import React from "react";
import { PopularMovieContainer, PopularTitle } from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import usePopularMovie from "#hooks/usePopular";

const PopularMovieSection: React.FC = () => {
	const { data, isLoading } = usePopularMovie();

	const getYear = (date: string) => {
		return date.split("-")[0];
	};

	return (
		<PopularMovieContainer>
			<PopularTitle>인기 영화</PopularTitle>
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
		</PopularMovieContainer>
	);
};

export default PopularMovieSection;
