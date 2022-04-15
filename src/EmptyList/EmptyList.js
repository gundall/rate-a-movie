import React from "react";
import {
    NoResultsContainer,
    NoResultsImage,
    NoResultsText
} from '../themes/bn/EmptyListStyled';

const NoResults = (props) => {
    const { children } = props;

    return (
        <NoResultsContainer>
            <NoResultsImage>

            </NoResultsImage>
            <NoResultsText>
               {children}
            </NoResultsText>
        </NoResultsContainer>
    );
};

export default NoResults;