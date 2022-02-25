import styled from "styled-components";

export const LayoutFooter = styled.footer`
	display: block;
	box-sizing: border-box;
	width: 100%;

	bottom: 0;
`;

export const FooterSection = styled.section`
	background-color: var(--color-FooterContainer);
`;

export const FooterStatistics = styled.section`
	background: #101113;
	width: 100%;
	height: 62px;
	line-height: flex;
	display: flex;
	justiy-content: center;
	align-items: center;
`;

export const FooterSummary = styled.span`
	color: black;
	font-size: 19px;
	font-weight: 500;
	line-height: 22px;
	text-align: center;
`;

export const FooterEmphasis = styled.em`
	color: var(--color-Footeremphasis);
	font-size: 19px;
	font-weight: 500;
	line-height: 22px;
`;

export const FooterContainer = styled.section`
	background: #1c1d1f;
	padding: 20px 0 39px;
`;

export const FooterContentWrapper = styled.div`
	display: flex;
	margin: 0 60px;
`;

export const FooterLeft = styled.div``;

export const FooterRight = styled.div``;

export const FootertermAndPolicy = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const FooterTermAndPolicyItem = styled.li`
	display: inline-block;
	color: #a5a5a7;
	font-size: 13px;
	font-weight: 400;
	line-height: 22px;
	vertical-align: top;
	cursor: pointer;
	&:not(:last-of-type) {
		&:after {
			content: "";
			display: inline-block;
			background: #848485;
			vertical-align: top;
			width: 1px;
			height: 12px;
			margin: 5px, 8px, 0;
		}
	}
`;
