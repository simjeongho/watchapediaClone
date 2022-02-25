import Card from "#components/card";
import Slider from "#components/slider";
import useAiringTodayTv from "#hooks/useAiringTodayTv";
import React from "react";

import { AiringTodayTVContainer, AiringTodayTVTitle } from "./styled";

const AiringTodayTvSection: React.FC = () => {
	const { data, isLoading } = useAiringTodayTv();

	const getYear = (date: string) => {
		return date.split("-")[0];
	};
	return (
		<AiringTodayTVContainer>
			<AiringTodayTVTitle>오늘 방영작</AiringTodayTVTitle>
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
		</AiringTodayTVContainer>
	);
};

export default AiringTodayTvSection;
