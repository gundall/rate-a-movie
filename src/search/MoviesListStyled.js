import styled from 'styled-components';

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;

	@media screen and (min-width: 477px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		overflow-y: auto;
	}
`;

export {
    ListContainer
};