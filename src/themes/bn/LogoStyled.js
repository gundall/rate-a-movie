import styled from 'styled-components';

const LogoHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 0 10px;
    justify-content: center;
    
    &.logo,
    &.logo * {
        font-family: Edo;
    }
    h1 {
        margin-bottom: 5px;
        margin-top: 0.3em;
    }
    &.logo span {
        font-family: Quicksand;
        font-size: 12px;
    }

    @media screen and (min-width: 477px) {
	    flex: 1;
        margin: 0;
        padding-left: 10px;
    }
	@media screen and (min-width: 477px) and (max-width: 768px) {
        h1 {
            font-size: 1.2em
        }
	}
	@media screen and (min-width: 769px) {
        h1 {
            font-size: 1.5em
        }
	}
	@media screen and (min-width: 769px) and (max-width: 1024px) {
        padding-left: 20px;
    }
	@media screen and (min-width: 1024px) {
        padding-left: 30px;
    }
`;

export {
    LogoHeader
};