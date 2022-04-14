import styled from 'styled-components';

const ListContainer = styled.div`
    display: block;
	overflow-y: auto;
	padding: 0 20px;

	@media screen and (min-width: 477px) {
		display: inline-grid;
		flex: 1;
		grid-gap: 20px;
		grid-auto-rows: 360px;
	}
	@media screen and (min-width: 477px) and (max-width: 540px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (min-width: 540px) and (max-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media screen and (min-width: 769px) and (max-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media screen and (min-width: 1024px) and (max-width: 1600px) {
		grid-template-columns: repeat(5, 1fr);
	}
	@media screen and (min-width: 1600px) {
		grid-template-columns: repeat(6, 1fr);
	}
`;

export {
    ListContainer
};