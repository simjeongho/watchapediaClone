import Card from "#components/card";
import useLatestMovie from "#hooks/useLatest";
import React from "react";
import Slider from "react-slick";
import { StringLiteralType } from "typescript";
import { LatestMovieContainer, LatestTitle } from "./styled";

const LatestMovieSection: React.FC = () => {
	const { data, isLoading } = useLatestMovie();

	const getYear = (date: string) => {
		return date.split("-")[0];
	};
	return (
		<LatestMovieContainer>
			<LatestTitle>최근 개봉작</LatestTitle>
			{isLoading || !data ? (
				<div>is Loading...</div>
			) : (
				<Card
					linkUrl={`/movie/${data.data.id}`}
					title={data.data.title}
					year={getYear(data.data.release_date)}
					posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${data?.data.poster_path}`}
					voteAverage={data.data.vote_average}
				/>
			)}
		</LatestMovieContainer>
	);
};

export default LatestMovieSection;
