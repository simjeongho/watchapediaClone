import React from "react";

import { AiFillStar } from "react-icons/ai";
import {
	CardAverage,
	CardContainer,
	CardImage,
	CardImageWrapper,
	CardInfo,
	CardKeyWord,
	CardTitle,
	StyledLink,
} from "./styled";

type Props = {
	linkUrl: string;
	title: string;
	year: string;
	posterPath: string;
	voteAverage: number;
};

const Card: React.FC<Props> = ({ linkUrl, title, year, posterPath, voteAverage }) => {
	return (
		<StyledLink to={linkUrl}>
			<CardContainer>
				<CardImageWrapper>
					<CardImage src={posterPath} alt={`${title}의 포스터`} />
				</CardImageWrapper>
				<CardInfo>
					<CardTitle>{title}</CardTitle>
					<CardKeyWord>{year}</CardKeyWord>
					<CardAverage>
						<span>평균</span>
						<span>
							&nbsp;
							<AiFillStar />
						</span>
						<span>{voteAverage}</span>
					</CardAverage>
				</CardInfo>
			</CardContainer>
		</StyledLink>
	);
};

export default Card;
