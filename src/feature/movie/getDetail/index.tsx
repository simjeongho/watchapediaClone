import useMovieDetail from "#hooks/useMovieDetail";
import { useParams } from "react-router-dom";
import {
	Backdrop,
	MovieDetailAction,
	MovieDetailActionButton,
	MovieDetailActionButtonContainer,
	MovieDetailAverageRate,
	MovieDetailBackDropImage,
	MovieDetailBottomInfo,
	MovieDetailContainer,
	MovieDetailContentSectionContainer,
	MovieDetailDivider,
	MovieDetailKeyWord,
	MovieDetailLeftBlur,
	MovieDetailLeftGradient,
	MovieDetailMain,
	MovieDetailPoster,
	MovieDetailPosterContainer,
	MovieDetailPosterWrapper,
	MovieDetailRatingWrapper,
	MovieDetailRightBlur,
	MovieDetailRightGradient,
	MovieDetailStarRate,
	MovieDetailStarRateText,
	MovieDetailTitle,
	MovieDetailTopInfo,
	DefaultInfo,
	Similar,
} from "./styled";
type Params = {
	id: string;
};

const GetMovieDetail: React.FC = () => {
	const { id } = useParams<Params>();
	const { isLoading, data } = useMovieDetail(id);
	return (
		<>
			{isLoading || !data ? (
				<div>is Loading ...</div>
			) : (
				<>
					<MovieDetailTopInfo>
						<MovieDetailPosterContainer>
							<Backdrop>
								<MovieDetailLeftBlur />
								<MovieDetailBackDropImage imageUrl={`${process.env.REACT_APP_IMAGE_PREFIX}/${data.data.backdrop_path}`}>
									<MovieDetailLeftGradient />
									<MovieDetailRightGradient />
								</MovieDetailBackDropImage>
								<MovieDetailRightBlur />
							</Backdrop>
						</MovieDetailPosterContainer>

						<MovieDetailMain>
							<MovieDetailContainer>
								<MovieDetailPosterWrapper>
									<MovieDetailPoster src={`${process.env.REACT_APP_IMAGE_PREFIX}/${data.data.poster_path}`} />
								</MovieDetailPosterWrapper>

								<MovieDetailTitle></MovieDetailTitle>
								<MovieDetailKeyWord></MovieDetailKeyWord>

								<MovieDetailAverageRate></MovieDetailAverageRate>
								<MovieDetailAction>
									<MovieDetailStarRate>
										<MovieDetailStarRateText></MovieDetailStarRateText>
										<MovieDetailRatingWrapper></MovieDetailRatingWrapper>
									</MovieDetailStarRate>

									<MovieDetailDivider />

									<MovieDetailActionButtonContainer>
										<MovieDetailActionButton>보고싶어요</MovieDetailActionButton>
										<MovieDetailActionButton>코멘트</MovieDetailActionButton>
										<MovieDetailActionButton>보는 중</MovieDetailActionButton>
										<MovieDetailActionButton>더보기</MovieDetailActionButton>
									</MovieDetailActionButtonContainer>
								</MovieDetailAction>
							</MovieDetailContainer>
						</MovieDetailMain>
					</MovieDetailTopInfo>

					<MovieDetailBottomInfo>
						<MovieDetailContentSectionContainer>
							<DefaultInfo />
							<Similar />
						</MovieDetailContentSectionContainer>
					</MovieDetailBottomInfo>
				</>
			)}
		</>
	);
};

export default GetMovieDetail;
