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
} from "./styled";
import { BiSearchAlt } from "react-icons/bi";

const Header: React.FC = () => {
	const handleKeyword = () => {};
	return (
		<LayoutHeader>
			<LayoutNav>
				<MenuListWrapper>
					<MenuList>
						<Menu>
							<ALink to="/">
								<TextLogo>
									<span className={"primary"}>Watcha</span>
									<span>pedia</span>
								</TextLogo>
							</ALink>
							<ALink to="/movie">
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
									</SearchLabel>
									<SearchInput placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요" onChange={handleKeyword} />
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
	);
};

export default Header;
