import styled from 'styled-components';

const NoResultsAnimationContainer = styled.div`
    flex: 1;
    max-height: 100%;
    max-width: 100%;
    position: relative;
`;

const StaticImg = styled.div`
    background-image: url(${props => props.src});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;

    @media screen and (max-height: 476px) and (min-width: 768px) {
        visibility: hidden;
    }
`;

const DynamicImg = styled.div`
    background-image: url(${props => props.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 10vw;
    left: 0;
    position: absolute;
    width: 10vw;

    @media screen and (min-height: 768px) {
        height: 10vh;
        width: 10vh;
    }
`;

export {
    DynamicImg,
    NoResultsAnimationContainer,
    StaticImg
};