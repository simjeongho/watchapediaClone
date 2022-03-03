import styled from "styled-components";

export const MovieDetailBase = styled.div`
	position: relative;
	background: #f8f8f8;
`;

export const MovieDetailTopInfo = styled.div`
	border-bottom: 1px solid rgb(227, 227, 227);
	background: rgb(255, 255, 255);
`;

export const MovieDetailPosterContainer = styled.div`
	width: 100%;
	height: 100%;
`;

export const Backdrop = styled.div`
	display: flex;
	width: 100%;
	height: 394px;
	background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.35) 2%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.5) 100%);
	overflow: hidden;
`;

export const MovieDetailLeftBlur = styled.div`
	flex: 1 1 0%;
	background: rgb(178, 196, 229);
`;

export const MovieDetailRightBlur = styled.div`
	flex: 1 1 0%;
	background: rgb(184, 184, 184);
`;

export const MovieDetailLeftGradient = styled.div`
	width: 150px;
	display: block;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	background-image: linear-gradient(-90deg, rgba(178, 196, 229, 0) 0%, rgb(178, 196, 229) 100%);
`;

export const MovieDetailRightGradient = styled.div`
	width: 150px;
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	background-image: linear-gradient(90deg, rgba(184, 184, 184, 0) 0%, rgb(184, 184, 184) 100%);
`;

export const MovieDetailBackDropImage = styled.div<{ imageUrl: string }>`
	background: url(${({ imageUrl }) => imageUrl}) center center / cover no-repeat;
	width: 1024px;
	position: relative;
	top: auto;
	left: auto;
	height: 100%;
	filter: none;
`;

export const MovieDetailPosterWrapper = styled.div`
	position: absolute;
	width: 166px;
	height: 238px;
	border: solid 2px #fff;
	top: -48px;
	left: 0;
	border-radius: 3px;
	box-shadow: 0 0 2px rgb(0 0 0 / 30%);
	background: #fff;
`;

export const MovieDetailPoster = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const MovieDetailMain = styled.main`
	padding: 14px 16px 22px;
	text-align: center;
`;

export const MovieDetailContainer = styled.div`
	max-width: 960px;
	margin: 0 auto;
	position: relative;
`;

export const MovieDetailContentWrapper = styled.div`
	margin: 0px 0px 0px 191px;
	text-align: left;
`;

export const MovieDetailTitle = styled.h1`
	font-size: 33px;
	font-weight: 700;
	line-height: 40px;
`;

export const MovieDetailKeyWord = styled.div`
	font-size: 17px;
	font-weight: 400;
	margin-top: 4px;
	color: rgba(0, 0, 0, 0.5);
`;

export const MovieDetailAverageRate = styled.div`
	font-size: 17px;
	font-weight: 400;
	line-height: 22px;
	padding: 8px 0;
	margin-top: 14px;
	border-top: 1px solid #ededed;
	border-bottom: 1px solid #ededed;
`;

export const MovieDetailAction = styled.div`
	margin-top: 20px;
	height: 58px;
	display: flex;
	align-items: center;
`;

export const MovieDetailStarRate = styled.div`
	width: 238px;
	height: 57px;
	margin: 0;
	text-align: center;
`;

export const MovieDetailStarRateText = styled.div`
	font-size: 12px;
	line-height: 16px;
	color: #787878;
`;

export const MovieDetailRatingWrapper = styled.div`
	margin-top: 8px;
`;

export const MovieDetailDivider = styled.div`
	width: 1px;
	height: 100%;
	background: #ededed;
	float: left;
`;

export const MovieDetailActionButtonContainer = styled.div`
	width: 461px;
	padding: 0 30px;
	margin: 0 -16px;
	display: flex;
	align-items: center;
`;

export const MovieDetailActionButton = styled.button`
	border: none;
	background: transparent;
	font-size: 14px;
	margin: 0 16px;
	display: flex;
	align-items: center;
	cursor: pointer;
	> svg {
		margin-right: 7px;
		&:hover {
			transform: scale(1.4);
		}
	}
`;

export const MovieDetailContentSectionContainer = styled.div`
	padding: 28px 0 48px;
	max-width: 960px;
	margin: 0 auto;
`;

export const MovieDetailBottomInfo = styled.div`
	border-right: 1px solid;
	border-left: 1px solid;
	border-top: 1px solid;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	background: #fff;
	border-color: #e3e3e3;
`;

export const DefaultInfo = styled.div``;

export const Similar = styled.div``;
