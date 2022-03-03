import useMovieDetail from "#hooks/useMovieDetail";
import { useMemo } from "react";
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

import { AiOutlinePlayCircle, AiFillEye, AiOutlinePlus } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { Rating } from "@mui/material";

type Params = {
	id: string;
};

const GetMovieDetail: React.FC = () => {
	const { id } = useParams<Params>();
	const { isLoading, data } = useMovieDetail(id ? id : "");

	const year = useMemo(() => {
		return data?.data.release_date.split("-")[0] || " ";
	}, [data]);
	const genres = useMemo(() => {
		return data?.data.genres.map((genre) => genre.name).join("/") || "";
	}, [data]);
	return (
		<>
			{isLoading ? (
				<div>is Loading ...</div>
			) : !data ? (
				<div>no data...</div>
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

								<MovieDetailTitle>{data.data.title}</MovieDetailTitle>
								<MovieDetailKeyWord>
									{year} . {genres}
								</MovieDetailKeyWord>

								<MovieDetailAverageRate>
									평균 * {data.data.vote_average} ({data.data.vote_count}명)
								</MovieDetailAverageRate>
								<MovieDetailAction>
									<MovieDetailStarRate>
										<MovieDetailStarRateText>평가하기</MovieDetailStarRateText>
										<MovieDetailRatingWrapper>
											<Rating />
										</MovieDetailRatingWrapper>
									</MovieDetailStarRate>

									<MovieDetailDivider />

									<MovieDetailActionButtonContainer>
										<MovieDetailActionButton>
											<AiOutlinePlus />
											보고싶어요
										</MovieDetailActionButton>
										<MovieDetailActionButton>
											<FaPen />
											코멘트
										</MovieDetailActionButton>
										<MovieDetailActionButton>
											<AiFillEye />
											보는 중
										</MovieDetailActionButton>
										<MovieDetailActionButton>
											<FiMoreHorizontal />
											더보기
										</MovieDetailActionButton>
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
