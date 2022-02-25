import LatestMovieSection from "#feature/movie/latest";
import NowPlayingMovieSection from "#feature/movie/nowPlaying";
import PopularMovieSection from "#feature/movie/popular";
import { MainPageContainer, MainPageh1 } from "./styled";

const MainPage = () => {
	return (
		<MainPageContainer>
			<MainPageh1>MainPage</MainPageh1>
			<LatestMovieSection />
			<NowPlayingMovieSection />
			<PopularMovieSection />
		</MainPageContainer>
	);
};

export default MainPage;
