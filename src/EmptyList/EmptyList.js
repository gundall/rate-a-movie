import React from "react";

import {
    NoResultsContainer,
    NoResultsText
} from '../themes/bn/EmptyListStyled';
import NoResultsAnimation from "../components/NoResultsAnimation/NoResultsAnimation";

const NoResults = (props) => {
    const { children } = props;

    return (
        <NoResultsContainer>
            <NoResultsText>
               {children}
            </NoResultsText>
            <NoResultsAnimation />
        </NoResultsContainer>
    );
};

export default NoResults;