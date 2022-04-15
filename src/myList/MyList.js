import React, {
    useState
} from "react";
import { useSelector } from 'react-redux';

import {
    RatedList
} from "../themes/bn/MyListStyled";

import Movie from '../components/Movie/Movie';
import Modal from '../components/Modal/Modal';
import EmptyList from "../EmptyList/EmptyList";

const MyList = () => {
    const [modalShown, setModalShown] = useState(false);
	const [modalData, setModalData] = useState({});

    const rated = useSelector((state) => state.rated.value);

    const handleMovieClick = (id) => {
		const movieData = rated.find((movie) => movie.id === id);

		if (movieData !== null) {
			setModalData(movieData);
			setModalShown(true);
		}
    }
    const handleModalClose = () => {
		setModalShown(false);
	}

    return (rated.length === 0
        ?   <EmptyList>
                <h2>{'You haven\'t rated any movies yet'}</h2>
                <p>{'Go to the "Search", search movies, and rate every movie you want.'}</p>
            </EmptyList>
        :   <>
                <RatedList>
                    {rated.map((movie) => {
                            const   {id, poster_path, rating, title} = movie,
                                    salt = Date.now();
                            return (
                                <Movie
                                    id={id}
                                    image={poster_path}
                                    key={id + salt}
                                    onMovieClick={handleMovieClick}
                                    rating={rating}
                                    title={title}
                                />
                            )
                        })
                    }
                </RatedList>
                {modalShown &&
                    <Modal
                        data={modalData}
                        onModalClose={handleModalClose}
                        readOnly={true}
                    />
                }
            </>
    );
};

export default MyList;