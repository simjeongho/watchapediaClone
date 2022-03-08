import styled from "styled-components";

export const Base = styled.section`
	padding: 11px 15px;
	border-bottom: 1px solid #ededed;
`;

export const SimilarHeaderWrapper = styled.div``;

export const SimilarHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SimilarTitle = styled.title`
	color: #000;
	font-size: 19px;
	font-weight: 700;
	margin: 8px 0;
`;

export const SimilarContentsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	margin-top: 15px;
	row-gap: 24px;
`;

export const SimilarContent = styled.div``;
