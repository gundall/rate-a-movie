import styled from "styled-components";

const NoResultsContainer = styled.div`
    align-items: stretch;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    padding: 30px 0;

    h2 {
        font-family: Edo !important;
    }
`;

const NoResultsText = styled.div`
    text-align: center;
`;

export {
    NoResultsContainer,
    NoResultsText
};