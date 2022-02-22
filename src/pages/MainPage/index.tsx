import LatestMovieSection from "#feature/movie/latest";
import { MainPageContainer, MainPageh1 } from "./styled";

const MainPage = () => {
	return (
		<MainPageContainer>
			<MainPageh1>MainPage</MainPageh1>
			<LatestMovieSection />
		</MainPageContainer>
	);
};

export default MainPage;
