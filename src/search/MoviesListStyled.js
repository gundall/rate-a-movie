import styled from 'styled-components';

const ListContainer = styled.div`
    display: block;
	overflow-y: auto;
	padding: 0 20px;

	@media screen and (min-width: 477px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
`;

export {
    ListContainer
};