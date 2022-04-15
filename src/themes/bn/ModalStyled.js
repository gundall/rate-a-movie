import styled, {
    css
} from 'styled-components';
import closeImg from '../../assets/close.png';

const HEADER_SIZES = {
    default: 40,
    desktop: 30
}

const ModalWrapper = styled.div`
    align-items: center;
    background-color: #888a;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;
`;
const ModalContainer = styled.div`
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: 70vh;
    overflow: hidden;
    padding: 10px;
    position: relative;
    width: 90vw;

    @media screen and (min-width: 477px) {
        height: 80vh;
        width: 80vw;
    }
    @media screen and (min-width: 477px) {
    }
	@media screen and (min-width: 477px) and (max-width: 768px) {
	}
	@media screen and (min-width: 769px) {
	}
	@media screen and (min-width: 769px) and (max-width: 1024px) {
    }
	@media screen and (min-width: 1024px) and (max-width: 1400px) {
        width: 75vw;
    }
    @media screen and (min-width: 1400px) {
        width: 60vw;
    }
`;
const ModalHeader = styled.div`
    align-items: stretch;
    display: flex;
    justify-content: flex-end;
    height: ${HEADER_SIZES.default}px;
    margin-bottom: 10px;

    @media screen and (min-width: 477px) {
        height: ${HEADER_SIZES.desktop}px;
    }
`;
const ModalClose = styled.button`
    background-color: inherit;
    background-image: url(${closeImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    border: none;
    cursor: pointer;
    height: ${HEADER_SIZES.default / 2}px;
    user-select: none;
    width: ${HEADER_SIZES.default / 2}px;

    @media screen and (min-width: 477px) {
        height: ${HEADER_SIZES.desktop / 2}px;
        width: ${HEADER_SIZES.desktop / 2}px;
    }
`;

const ModalContent = styled.div`
    display: block;
    overflow-y: auto;
    margin: 0 15px;
    margin-bottom: 15px;

    @media screen and (min-width: 768px) {
        display: flex;
        flex: 1;
        overflow: hidden;
    }
`;
const ModalLeftContent = styled.div`
    display: block;

    @media screen and (min-width: 477px) {
        flex: 1;
    }
`;

const ModalImage = styled.img`
    max-width: 100%;
    max-height: 100%;

	${props =>
		props.default &&
			css`
				filter: blur(1px) brightness(1.5);
				opacity: .8;
			`
	}
`;
const ModalDataList = styled.div`
    div {
        margin-bottom: 5px;
    }

    @media screen and (min-width: 769px) {
        margin: 0 20px;
        
        h2 {
            margin-top: 0;
        }
    }
`;

const ModalRightContent = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 477px) {
        flex: 1;
        justify-content: space-between;
    }
`;

const ModalRatingContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    h2 {
        font-family: Edo !important;
        margin-bottom: 5px;
    }
`;

export {
    ModalClose,
    ModalContainer,
    ModalContent,
    ModalDataList,
    ModalImage,
    ModalHeader,
    ModalLeftContent,
    ModalRatingContainer,
    ModalRightContent,
    ModalWrapper
};