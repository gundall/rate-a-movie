import styled, {
    css
} from 'styled-components';

const ModalWrapper = styled.div`
    align-items: center;
    background-color: #fff7;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
`;
const ModalContainer = styled.div`
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 90vw;

    @media screen and (min-width: 477px) {
        height: 80vh;
        width: 60vw;
    }
`;
const ModalHeader = styled.div`
    align-items: stretch;
    display: flex;
    justify-content: flex-end;
    height: 40px;
`;
const ModalClose = styled.button`
    background-color: inherit;
    border: none;
    cursor: pointer;
    user-select: none;
`;

const ModalContent = styled.div`
    display: grid;
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    flex: 1;
`;
const ModalLeftContent = styled.div`
    display: flex;
    grid-column: 1;
    grid-row: 1;
`;
const ModalImage = styled.div`
    background-image: url(${props => props.src});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	flex: 1;

	${props =>
		props.default &&
			css`
				filter: blur(1px) brightness(1.5);
				opacity: .8;
			`
	}
`;
const ModalDataList = styled.div``;

const ModalRightContent = styled.div`
    grid-row: 1;
    grid-column: 2;
`;

export {
    ModalClose,
    ModalContainer,
    ModalContent,
    ModalDataList,
    ModalImage,
    ModalHeader,
    ModalLeftContent,
    ModalRightContent,
    ModalWrapper
};