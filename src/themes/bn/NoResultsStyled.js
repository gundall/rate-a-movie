import styled from "styled-components";

const NoResultsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        font-family: Edo !important;
    }

    @media screen and (min-width: 477px) {
        flex-direction: row;
    }
`;

const SearchInfo = styled.div`

`;

const NoResultsImage = styled.div``;

const NoResultsText = styled.div``;

export {
    NoResultsContainer,
    NoResultsImage,
    NoResultsText,
    SearchInfo
};