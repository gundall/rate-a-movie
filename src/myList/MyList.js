import React, {
    useState
} from "react";
import { useSelector } from 'react-redux';

import {
    RatedList
} from "./MyListStyled";

import Movie from '../components/Movie/Movie';
import Modal from '../components/Modal/Modal';

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

    return (
        <>
            <RatedList>
                {rated.length > 0
                    ? rated.map((movie) => {
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
                    : <h1>Nihil novum sub sole</h1>
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