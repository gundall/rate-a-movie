import React from "react";
import {
    NoResultsContainer,
    NoResultsImage,
    NoResultsText,
    SearchInfo
} from '../themes/bn/NoResultsStyled';

const NoResults = (props) => {
    const { fromSearch } = props;

    return (
        <NoResultsContainer>
            <NoResultsImage>

            </NoResultsImage>
            <NoResultsText>
                <h2>No movies available.</h2>
                {
                    fromSearch &&
                    <SearchInfo>
                        
                    </SearchInfo>
                }
            </NoResultsText>
        </NoResultsContainer>
    );
};

export default NoResults;