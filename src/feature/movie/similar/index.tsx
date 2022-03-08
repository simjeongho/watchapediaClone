import useSimilarMovie from "#hooks/useSimilarMovie";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Base, SimilarContentsWrapper, SimilarHeader, SimilarHeaderWrapper, SimilarTitle } from "./styled";

interface Props {
	id: string;
}

interface SimilarMovieProps {
	id: number;
	posterPath: string | null;
	title: string;
	voteAverage: number;
}

const CardLink = styled(Link)`
	text-decoration: none;
`;

const CardContainer = styled.div`
	max-width: 140px;
`;

const PosterWrapper = styled.div`
	width: 140px;
	height: 204px;
	border: 1px solid rgb(234, 233, 232);
`;

const Poster = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 5px;
	vertical-align: top;
`;

const Info = styled.div`
	margin: 5px 10px 0px 0px;
`;

const CardTitle = styled.div`
	color: rgn(41, 42, 50);
	font-size: 16px;
	font-weight: 500;
	line-height: 22px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const VoteAverage = styled.div`
	margin-top: 2px;
	color: rgb(120, 120, 120);
	font-size: 13px;
	font-weight: 400;
	line-height: 18px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const SimilarMovie: React.FC<SimilarMovieProps> = ({ id, posterPath, title, voteAverage }) => {
	return (
		<CardLink to={`/movie/${id}`}>
			<CardContainer>
				<PosterWrapper>
					<Poster src={`${process.env.REACT_APP_IMAGE_PREFIX}/${posterPath}`} />
				</PosterWrapper>
				<Info>
					<CardTitle>{title}</CardTitle>
					<VoteAverage>{voteAverage}</VoteAverage>
				</Info>
			</CardContainer>
		</CardLink>
	);
};

const SimilarMovies: React.FC<Props> = ({ id }) => {
	const { isLoading, data } = useSimilarMovie(id);

	return (
		<Base>
			<SimilarHeaderWrapper>
				<SimilarHeader>
					<SimilarTitle>비슷한 작품</SimilarTitle>
				</SimilarHeader>
			</SimilarHeaderWrapper>
			<SimilarContentsWrapper>
				{isLoading || !data ? (
					<div>Loading...</div>
				) : (
					data.data.results.map((result) => (
						<SimilarMovie
							id={result.id}
							posterPath={result.poster_path}
							title={result.title}
							voteAverage={result.vote_average}
						/>
					))
				)}
			</SimilarContentsWrapper>
		</Base>
	);
};

export default SimilarMovies;
