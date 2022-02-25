import Card from "#components/card";
import Slider from "#components/slider";
import usePopularTv from "#hooks/usePopularTv";
import React from "react";
import { PopularTVContainer, PopularTVTitle } from "./styled";

const PopularTvSection: React.FC = () => {
	const { data, isLoading } = usePopularTv();

	const getYear = (date: string) => {
		return date.split("-")[0];
	};
	return (
		<PopularTVContainer>
			<PopularTVTitle>인기 프로그램</PopularTVTitle>
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
		</PopularTVContainer>
	);
};

export default PopularTvSection;
