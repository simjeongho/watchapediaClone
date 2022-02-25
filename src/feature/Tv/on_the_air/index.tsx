import Card from "#components/card";
import Slider from "#components/slider";
import useOnTheAirTv from "#hooks/useOnTheAirTv";
import React from "react";
import { OnTheAirTVContainer, OnTheAirTVTitle } from "./styled";

const OnTheAirTvSection: React.FC = () => {
	const { data, isLoading } = useOnTheAirTv();

	const getYear = (date: string) => {
		return date.split("-")[0];
	};
	return (
		<OnTheAirTVContainer>
			<OnTheAirTVTitle>현재 방영작</OnTheAirTVTitle>
			{isLoading || !data ? (
				<div>is Loading...</div>
			) : (
				<Slider>
					{data.data.results.map((tv) => (
						<Card
							linkUrl={`/tv/${tv.id}`}
							title={tv.name}
							posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}
							voteAverage={tv.vote_count}
							year={getYear(tv.first_air_date)}
						/>
					))}
				</Slider>
			)}
		</OnTheAirTVContainer>
	);
};

export default OnTheAirTvSection;
