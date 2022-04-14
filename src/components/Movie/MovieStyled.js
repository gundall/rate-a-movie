import styled, {
	css
} from 'styled-components';

// Styled Components.
const MainWrapper = styled.a`
	margin: 0 20px;
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
	justify-content: space-between;
	margin: 20px 0;
	max-width: 100vw;
	overflow: hidden;
	position: relative;

	@media screen and (min-width: 477px) {
		width: 10vw;
		height: ${10 * 1.5}vw;
	}
`;
const DataContainer = styled.div`
	text-align: center;

	@media screen and (min-width: 477px) {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		flex: 1;
		padding: 0 10px;
	}
`;
const Image = styled.div`
	background-image: url(${props => props.src});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	flex: 5;

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

	@media screen and (min-width: 477px) {
		font-size: 18px;
	}
`
export {
    DataContainer,
    Image,
    MainContainer,
    MainWrapper,
    Title
}