import Card from "#components/card";
import useLatestTv from "#hooks/useLatestTv";
import React from "react";
import { LatestTVContainer, LatestTVTitle } from "./styled";

const LatestTvSection: React.FC = () => {
	const { data, isLoading } = useLatestTv();

	const getYear = (date: string) => {
		return date.split("-")[0];
	};
	return (
		<LatestTVContainer>
			<LatestTVTitle>TV 최근 개봉작</LatestTVTitle>
			{isLoading || !data ? (
				<div>is Loading...</div>
			) : (
				<Card
					linkUrl={`/tv/${data.data.id}`}
					title={data.data.name}
					posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${data?.data.poster_path}`}
					voteAverage={data.data.vote_average}
					year={getYear(data.data.first_air_date)}
				/>
			)}
		</LatestTVContainer>
	);
};

export default LatestTvSection;
