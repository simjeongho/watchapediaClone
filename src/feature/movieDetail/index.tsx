import React from "react";
import {
	DetailBase,
	DetailHeader,
	DetailHeaderWrapper,
	DetailLink,
	DetailMoreSee,
	DetailSummary,
	DetailTitle,
} from "./styled";

interface Props {
	title: string;
	year: string;
	genres: string;
	runtime: number;
	overview: string;
}

const DefaultInfo: React.FC<Props> = ({ title, year, genres, runtime, overview }) => {
	const hour = Math.ceil(runtime / 60);
	const minute = runtime % 60;
	return (
		<DetailBase>
			<DetailHeaderWrapper>
				<DetailHeader>
					<DetailTitle>{title}</DetailTitle>
					<DetailLink href="/overview">
						<DetailMoreSee>더보기</DetailMoreSee>
					</DetailLink>
				</DetailHeader>
				<DetailSummary>
					{title}
					<br />
					{year} * {genres}
					<br />
					{hour} 시간 {minute}분
					<br />
					<br />
					{overview}
				</DetailSummary>
			</DetailHeaderWrapper>
		</DetailBase>
	);
};

export default DefaultInfo;
