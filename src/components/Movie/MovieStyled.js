import styled, {
	css
} from 'styled-components';

// Styled Components.
const MainWrapper = styled.a`
	text-decoration: none;

	&:active,
	&:visited {
		color: initial;
	}
`;
const MainContainer = styled.div`
	border-radius: 10px;
	box-shadow: #000 0px 0px 18px 2px;
	display: flex;
	flex-direction: column;
	margin: 20px 0;
	max-width: 100vw;
	overflow: hidden;
	position: relative;

	@media screen and (min-width: 477px) {
		max-width: 20vw;
	}
`;
const DataContainer = styled.div``;
const Image = styled.img`
	${props =>
		props.default &&
			css`
				filter: blur(1px) brightness(1.5);
				opacity: .8;
			`
	}
`;
const Title = styled.span`
	font-size: 32px;
`
export {
    DataContainer,
    Image,
    MainContainer,
    MainWrapper,
    Title
}