import React from "react";
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Movie from '../components/Movie/Movie';

const RatedList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: auto;
`;

const MyList = () => {
    const rated = useSelector((state) => state.rated.value);
    return (
        <RatedList>
            {rated.length > 0
                ? rated.map((movie) => {
                    const   {id, poster_path, title} = movie,
                            salt = Date.now();
                    return (
                        <Movie
                            id={id}
                            image={poster_path}
                            key={id + salt}
                            rating={3}
                            title={title}
                        />
                    )
                })
                : <h1>Nihil novum sub sole</h1>
            }
        </RatedList>
    );
};

export default MyList;