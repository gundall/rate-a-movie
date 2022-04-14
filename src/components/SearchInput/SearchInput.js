import React from "react";
import styled from 'styled-components'

const SearchContainer = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;
const Input = styled.input`
    border-radius: 20px;
    outline: none;
`;

const Search = (props) => {
    const {onSubmit} = props;
    return (
        <SearchContainer>
            <form onSubmit={onSubmit}>
                <Input type="search" />
                <button>
                    <span role="img" aria-label="search">🔎</span>
                </button>
            </form>
        </SearchContainer>
    );
};

export default Search;