import React from "react";

import {
    Input,
    Magnifier,
    SearchContainer,
    SearchForm
} from '../../themes/bn/SearchInputStyled';

const Search = (props) => {
    const {onSearch, onSubmit} = props;
    return (
        <SearchForm onSubmit={onSubmit}>
            <SearchContainer onSubmit={onSubmit}>
                    <Input
                        type="search"
                        onChange={onSearch}
                    />
                    <Magnifier />
            </SearchContainer>
        </SearchForm>
    );
};

export default Search;