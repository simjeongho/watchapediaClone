import { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

type Props = {
	children: ReactNode;
};

const LayoutContainer = styled.div``;

const Layout = ({ children }: Props) => {
	return (
		<LayoutContainer>
			<Header />
			{children}
			<Footer />
		</LayoutContainer>
	);
};

export default Layout;
