import React from "react";

import { beatOut } from '../../utils/animations';

import {
    Input,
    Magnifier,
    SearchContainer,
    SearchForm
} from '../../themes/bn/SearchInputStyled';

const Search = (props) => {
    const {onSearch, onSubmit} = props;

    const handleMagnifierClick = (e) => {
        beatOut(e.currentTarget);
    };

    return (
        <SearchForm onSubmit={onSubmit}>
            <SearchContainer onSubmit={onSubmit}>
                    <Input
                        type="search"
                        onChange={onSearch}
                    />
                    <Magnifier onClick={handleMagnifierClick}/>
            </SearchContainer>
        </SearchForm>
    );
};

export default Search;