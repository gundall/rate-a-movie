import styled from 'styled-components';

const LogoHeader = styled.div`
    margin-bottom: 10px;
    padding: 0 10px;
    
    &.logo,
    &.logo * {
        font-family: Edo;
    }
    h1 {
        margin-bottom: 5px;
    }
    &.logo span {
        font-family: Quicksand;
        font-size: 12px;
    }

    @media screen and (min-width: 477px) {
	    flex: 1;
        margin: 0;
        margin-left: 30px;
    }
	@media screen and (min-width: 477px) and (max-width: 540px) {
	}
	@media screen and (min-width: 540px) and (max-width: 768px) {
	}
	@media screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media screen and (min-width: 1024px) and (max-width: 1600px) {
	}
	@media screen and (min-width: 1600px) {
	}
`;

export {
    LogoHeader
};