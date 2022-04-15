import styled, {
	css
} from 'styled-components';

// Styled Components.
const MainWrapper = styled.div`
	margin: 0 20px;
	height: 100vw;
	position: relative;

	&:active,
	&:visited {
		color: initial;
	}

	@media screen and (min-width: 477px) {
		height: auto;
		margin: 0;
	}
`;
const MainContainer = styled.div`
	border-radius: 3px;
	bottom: 0;
	box-shadow: #666 0px 0px 12px 1px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	left: 0;
	margin: 20px 0;
	max-width: 100vw;
	overflow: hidden;
	position: absolute;
	right: 0;
	top: 0;

	@media screen and (min-width: 477px) {
		width: auto;
		height: auto;
	}
`;
const DataContainer = styled.div`
	align-items: center;
	display: flex;
	flex: 1;
	flex-direction: column;	
	justify-content: center;
	margin-bottom: 10px;

	@media screen and (min-width: 477px) {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
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
	font-size: 22px;
	font-weight: 900;
	margin: 10px;
	text-align: center;

	@media screen and (min-width: 477px) {
		font-size: 16px;
	}
`
export {
    DataContainer,
    Image,
    MainContainer,
    MainWrapper,
    Title
}