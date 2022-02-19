import {
	FooterContainer,
	FooterContentWrapper,
	FooterEmphasis,
	FooterLeft,
	FooterRight,
	FooterSection,
	FooterStatistics,
	FooterSummary,
	FootertermAndPolicy,
	FooterTermAndPolicyItem,
	LayoutFooter,
} from "./styled";

const Footer: React.FC = () => {
	return (
		<LayoutFooter>
			<FooterSection>
				<FooterStatistics>
					<FooterSummary>
						지금까지 &nbsp;
						<FooterEmphasis>* 644,934,343 개의 평가가</FooterEmphasis>
						&nbsp; 쌓였어요.
					</FooterSummary>
				</FooterStatistics>
				<FooterContainer>
					<FooterContentWrapper>
						<FooterLeft>
							<FootertermAndPolicy>
								<FooterTermAndPolicyItem>서비스 이용약관</FooterTermAndPolicyItem>
								<FooterTermAndPolicyItem>개인정보 처리방침</FooterTermAndPolicyItem>
								<FooterTermAndPolicyItem>회사 정보</FooterTermAndPolicyItem>
							</FootertermAndPolicy>
						</FooterLeft>
						<FooterRight />
					</FooterContentWrapper>
				</FooterContainer>
			</FooterSection>
		</LayoutFooter>
	);
};

export default Footer;
