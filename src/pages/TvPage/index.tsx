import TopRatedMovieSection from "#feature/movie/topRated";
import AiringTodayTvSection from "#feature/Tv/airing_Today";
import LatestTvSection from "#feature/Tv/latest";
import OnTheAirTvSection from "#feature/Tv/on_the_air";
import PopularTvSection from "#feature/Tv/popular";
import { LatestMainContainer } from "#pages/MainPage/styled";

const TvPage = () => {
	return (
		<>
			<LatestMainContainer>
				<LatestTvSection />
			</LatestMainContainer>

			<AiringTodayTvSection />
			<OnTheAirTvSection />
			<PopularTvSection />
			<TopRatedMovieSection />
		</>
	);
};

export default TvPage;
