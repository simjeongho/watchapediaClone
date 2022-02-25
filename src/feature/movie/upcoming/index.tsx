import Card from "#components/card";
import Slider from "#components/slider";
import React from "react";
import { UpComingMovieContainer, UpComingTitle } from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useUpComingMovie from "#hooks/useUpComing";

const UpComingMovieSection: React.FC = () => {
	const { data, isLoading } = useUpComingMovie();

	const getYear = (date: string) => {
		return date.split("-")[0];
	};

	return (
		<UpComingMovieContainer>
			<UpComingTitle>개봉 예정작</UpComingTitle>
			{isLoading || !data ? (
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
		</UpComingMovieContainer>
	);
};

export default UpComingMovieSection;
