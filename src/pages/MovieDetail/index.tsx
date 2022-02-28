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

const MovieDetailPage = () => {
	return (
		<>
			<MovieDetailTopInfo>
				<MovieDetailPosterContainer>
					<Backdrop>
						<MovieDetailLeftBlur />
						<MovieDetailBackDropImage>
							<MovieDetailLeftGradient />
							<MovieDetailRightGradient />
						</MovieDetailBackDropImage>
						<MovieDetailRightBlur />
					</Backdrop>
				</MovieDetailPosterContainer>

				<MovieDetailMain>
					<MovieDetailContainer>
						<MovieDetailPosterWrapper>
							<MovieDetailPoster />
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
	);
};

export default MovieDetailPage;
