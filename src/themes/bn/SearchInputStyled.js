import styled from 'styled-components';
import magnifierImg from '../../assets/magnifier.png';
import crossImg from '../../assets/close.png';

const INPUT_SIZES = {
    default: 25,
    desktop: 30
}
const SearchForm = styled.form`
    align-items: center;
    display: flex;

    @media screen and (min-width: 477px) {
	   flex: 1;
	}
`;
const SearchContainer = styled.div`
    align-items: center;
    border: 2px solid black;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    height: ${INPUT_SIZES.default}px;
    justify-content: flex-end;
    padding: 0 5px;
    margin: 0 10px;
    margin-top: 10px;

    @media screen and (min-width: 477px) {
        flex: 1;
        margin: 0 30px;
    }
`;
const Input = styled.input`
    border: none;
    border-radius: 20px;
    font-weight: 900;
    outline: none;
    width: 100%;

    &::-webkit-search-cancel-button {
        background: url(${crossImg}) no-repeat 50% 50%;
        background-size: contain;
        border-radius: 50em;
        cursor: pointer;
        height: 0.9em;
        width: 0.9em;
        -webkit-appearance: none;
    }
`;
const Magnifier = styled.button`
    border: none;
    background-color: transparent;
    background-image: url(${magnifierImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    height: ${INPUT_SIZES.default}px;
    width: ${INPUT_SIZES.default}px;
`;

export {
    Input,
    Magnifier,
    SearchContainer,
    SearchForm
};