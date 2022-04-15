import React from "react";

import {
    NoResultsContainer,
    NoResultsText
} from '../themes/bn/EmptyListStyled';

const NoResults = (props) => {
    const { children } = props;

    return (
        <NoResultsContainer>
            <NoResultsText>
               {children}
            </NoResultsText>
        </NoResultsContainer>
    );
};

export default NoResults;