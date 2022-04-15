import styled from "styled-components";

const NoResultsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 0;

    h2 {
        font-family: Edo !important;
    }

    @media screen and (min-width: 477px) {
        flex-direction: row;
    }
`;

const NoResultsText = styled.div``;

export {
    NoResultsContainer,
    NoResultsText
};