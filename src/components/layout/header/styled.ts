import { Link } from "react-router-dom";
import styled from "styled-components";

export const LayoutHeader = styled.header`
	position: sticky;
	display: block;
	top: 0;
	left: 0;
	background-color: var(--color-white);
	text-align: center;
	box-shadow: 0px 1px 0px 0px var(--color-black);
	width: 100%;
	height: 6%;
`;

export const LayoutNav = styled.nav`
	margin: 0 auto;
	max-width: 1200px;
`;

export const MenuListWrapper = styled.div``;

export const MenuList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	overflow: hidden;
`;

export const Menu = styled.li`
	display: flex;
	align-items: center;
	height: 100%;
	flex-shrink: 0;
	margin: auto;
	&: not(: first-child) {
		margin-left: 5%;
	}
`;

export const MenuButton = styled.button<{ active?: boolean }>`
	font-size: 15px;
	color: ${({ active }) => (active ? "var(--color-dark-gray)" : "var(--color-light-gray)")}};
    cursor: pointer;
    border: none;
    background: none;

`;

export const SearchMenu = styled.li`
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	flex-shrink: 0;
	margin: auto;
	position: relative;
`;

export const ALink = styled(Link)`
	text-decoration: none;
`;

export const TextLogo = styled.h1`
	font-size: 24px;
	font-weight: 700;
	&.primary {
		color: var(--color-header-span);
	}
	.nonprimary & {
		color: var(--color-header-notspan);
	}
`;

export const SearchContainer = styled.div`
	position: relative;
	width: 100%;
`;

export const SearchformWrapper = styled.div``;

export const SearchForm = styled.div`
	width: 100%;
	display: flex;
`;

export const SearchLabel = styled.label`
	background: var(--color-header-searchlabel);
	display: flex;
	align-items: flex;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	border-radius: 2px;
	padding: 7px, 8px;
`;

export const SearchInput = styled.input`
	font-size: 14px;
	font-weight: 400;
	background: transparent;
	width: 100%;
	padding: 0 0 0 8px;
	border: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	caret-color: var(--color-searchinput);
	line-height: 23px;
`;

export const SignInButton = styled.button`
	background: transparent;
	color: var(--color-signinButton);
	font-size: 14px;
	padding: 0;
	border: 0;
	cursor: pointer;
	margin: 15px, 0;
`;

export const SignUpButton = styled.button`
    border-radius: 6px,
    font-weight: 500;
    box-sizing: border-box;
    min-width: 72px;
    height: 80%;
    background:: transparent;
    color: var(--color-searchinput);
    font-size: 14px;
    border: 1px solid rgba(116,116,123,0.5);
    cursor: pointer;
    margin: 15px, 0
`;

export const SearchResultWrapper = styled.div`
	position: fixed;
	top: 2%;
	left: 40%;
	background-color: var(--color-light-gray);
	z-index: 999;
	width: 40%;
	border-radius: 8px;
	box-shadow: 0 2px 5px 0 rgba(0 0 0 0.1);
	max-height: 5%;
	overflow-y: scroll;
`;

export const SearchResultList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const SearchResultItem = styled.li`
	padding: 4px, 6px;
	box-sizing: border-box;
	color: #222;
	font-size: 16px;
	width: 100%;
	height: 7%;
	display: flex;
	align-items: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	&:hover {
		background: #eee;
	}
`;
