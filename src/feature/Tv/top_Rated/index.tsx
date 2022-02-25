import Card from "#components/card";
import Slider from "#components/slider";
import useTopRatedTv from "#hooks/useTopRatedTv";
import React from "react";

import { TopRatedTVContainer, TopRatedTVTitle } from "./styled";

const TopRatedTvSection: React.FC = () => {
	const { data, isLoading } = useTopRatedTv();

	const getYear = (date: string) => {
		return date.split("-")[0];
	};
	return (
		<TopRatedTVContainer>
			<TopRatedTVTitle>인기 순위</TopRatedTVTitle>
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
		</TopRatedTVContainer>
	);
};

export default TopRatedTvSection;
