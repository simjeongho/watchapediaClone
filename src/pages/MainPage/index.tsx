import LatestMovieSection from "#feature/movie/latest";
import NowPlayingMovieSection from "#feature/movie/nowPlaying";
import PopularMovieSection from "#feature/movie/popular";
import TopRatedMovieSection from "#feature/movie/topRated";
import UpComingMovieSection from "#feature/movie/upcoming";
import LatestTvSection from "#feature/Tv/latest";
import { MainPageContainer, MainPageh1, MovieContainer, TvContainer, LatestMainContainer } from "./styled";

const MainPage = () => {
	return (
		<MainPageContainer>
			<LatestMainContainer>
				<LatestMovieSection />
			</LatestMainContainer>

			<NowPlayingMovieSection />
			<PopularMovieSection />
			<TopRatedMovieSection />
			<UpComingMovieSection />
		</MainPageContainer>
	);
};

export default MainPage;
