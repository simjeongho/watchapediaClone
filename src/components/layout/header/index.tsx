import {
	ALink,
	LayoutHeader,
	LayoutNav,
	MenuList,
	Menu,
	MenuListWrapper,
	TextLogo,
	MenuButton,
	SearchMenu,
	SearchContainer,
	SearchForm,
	SearchLabel,
	SearchInput,
	SignInButton,
	SignUpButton,
	SearchResultWrapper,
	SearchResultList,
	SearchResultItem,
} from "./styled";
import { BiSearchAlt } from "react-icons/bi";
import useMovieSearch from "#hooks/useMovieSearch";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	const [searchKeyword, setSearchKeyword] = useState("");
	const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchKeyword(e.target.value);
	};
	const { data: movieResultSearch } = useMovieSearch(searchKeyword);

	return (
		<>
			<LayoutHeader>
				<LayoutNav>
					<MenuListWrapper>
						<MenuList>
							<Menu>
								<ALink to="/">
									<TextLogo>
										<span className="primary">Watcha</span>
										<span className="nonprimary">pedia</span>
									</TextLogo>
								</ALink>
								<ALink to="/">
									<MenuButton>영화</MenuButton>
								</ALink>
								<ALink to="/tv">
									<MenuButton>Tv프로그램</MenuButton>
								</ALink>
							</Menu>

							<SearchMenu>
								<SearchContainer>
									<SearchForm>
										<SearchLabel>
											<BiSearchAlt />
											<SearchInput placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요" onChange={handleKeyword} />
										</SearchLabel>
									</SearchForm>
								</SearchContainer>
							</SearchMenu>
							<Menu>
								<SignInButton>로그인</SignInButton>
								<SignUpButton>회원가입</SignUpButton>
							</Menu>
						</MenuList>
					</MenuListWrapper>
				</LayoutNav>
			</LayoutHeader>
			<SearchResultWrapper>
				<SearchResultList>
					{movieResultSearch?.data.results.map((item) => (
						<Link key={item.id} to={`/movie/${item.id}`}>
							<SearchResultItem>{item.title}</SearchResultItem>
						</Link>
					))}
				</SearchResultList>
			</SearchResultWrapper>
		</>
	);
};

export default Header;
