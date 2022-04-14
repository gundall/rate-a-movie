import React from "react";
import styled from 'styled-components'

const SearchContainer = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0 30px;
`;
const Input = styled.input`
    border-radius: 20px;
    outline: none;
`;

const Search = (props) => {
    const {onSearch, onSubmit} = props;
    return (
        <SearchContainer>
            <form onSubmit={onSubmit}>
                <Input
                    type="search"
                    onChange={onSearch}
                />
                <button>
                    <span role="img" aria-label="search">🔎</span>
                </button>
            </form>
        </SearchContainer>
    );
};

export default Search;