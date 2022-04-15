import styled from 'styled-components';
import starIcon from '../../assets/star.svg';
import starFilledIcon from '../../assets/star_filled.svg';

const CONTAINER_HEIGHT = 40;
const STAR_SIZES = {
    default: CONTAINER_HEIGHT / 1.2,
    desktop: CONTAINER_HEIGHT
};

const StarsContainer = styled.div`
    align-items: center;
    display: flex;
    filter: grayscale(0.5) contrast(1.2);
    flex-direction: row;
    justify-content: flex-start;
    min-height: ${CONTAINER_HEIGHT}px;
    margin-bottom: 15px;
    max-width: 100%;
    overflow: visible;
`;

const Star = styled.span`
    background-image: url(${props => props.filled
        ? starFilledIcon
        : starIcon
    });
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: ${props => props.readOnly ? 'default' : 'pointer'};
    height: ${props => props.size ? props.size : STAR_SIZES.default}px;
    padding: 0 5px;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: ${props => props.size ? props.size : STAR_SIZES.default}px;

    @media screen and (min-width: 477px) {
        height: ${props => props.size ? props.size : STAR_SIZES.desktop}px;
        width: ${props => props.size ? props.size : STAR_SIZES.desktop}px;
    }
`;

export {
    Star,
    StarsContainer
};