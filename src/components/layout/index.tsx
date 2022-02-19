import { ReactNode } from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "#components/layout/footer/index";

type Props = {
	children: ReactNode;
};

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`;

const WatchaLayout = ({ children }: Props) => {
	return (
		<LayoutContainer>
			<Header />
			{children}
			<Footer />
		</LayoutContainer>
	);
};

export default WatchaLayout;
