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
    flex-direction: row;
    justify-content: flex-start;
    min-height: ${CONTAINER_HEIGHT};
`;

const Star = styled.span`
    background-image: url(${props => props.filled
        ? starFilledIcon
        : starIcon
    });
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: ${STAR_SIZES.default}px;
    margin: 0 5px;
    width: ${STAR_SIZES.default}px;

    @media screen and (min-width: 477px) {
        height: ${STAR_SIZES.desktop}px;
        width: ${STAR_SIZES.desktop}px;
    }
`;

export {
    Star,
    StarsContainer
};