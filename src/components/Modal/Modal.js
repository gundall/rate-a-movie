import React from "react";
import {
    ModalClose,
    ModalContainer,
    ModalContent,
    ModalDataList,
    ModalImage,
    ModalHeader,
    ModalLeftContent,
    ModalRightContent,
    ModalWrapper
} from './ModalStyled';

const MAX_RATING = process.env.REACT_APP_MAX_RATING;
const DEFAULT_MOVIE_POSTER = process.env.REACT_APP_DEFAULT_MOVIE_POSTER;

const Modal = (props) => {
    const {data, onModalClose, onMovieRated} = props;
    const {original_language, original_title, overview, poster_path, rating, release_date, title} = data;
    const 	useDefaultImage = !poster_path || poster_path === null || poster_path === '',
			imageUrl = useDefaultImage
				? DEFAULT_MOVIE_POSTER
				: `${process.env.REACT_APP_MOVIES_POSTER_BASE_URL}${poster_path}`; // Viene con '/' delante

    console.log(data);

    const handleModalClose = () => {
        onModalClose();
    }
    const handleMovieRated = (rating = 3) => {
        onMovieRated(rating);
    }

    return (
        <ModalWrapper>
            <ModalContainer>
                {/* HEADER */}
                <ModalHeader>
                    <ModalClose onClick={handleModalClose}>X</ModalClose>
                </ModalHeader>

                {/* CONTENT */}
                <ModalContent>
                    {/* UPPER */}
                    <ModalLeftContent>
                        {/* Image */}
                        <ModalImage
                            default={useDefaultImage}
                            src={imageUrl}
                        />
                    </ModalLeftContent>
                    <ModalRightContent>
                        {/* Data */}
                        <ModalDataList>
                            <h1>
                                {title && title !== ""
                                    ? title
                                    : 'Untitled'
                                }
                            </h1>
                            {original_title &&
                                <div>
                                    <b>Original Title</b>: <span>{original_title}</span>
                                </div>
                            }
                            {release_date &&
                                <div>
                                    <b>Release date</b>: <span>{release_date}</span>
                                </div>
                            }
                            {original_language &&
                                <div>
                                    <b>Original language</b>: <span>{original_language}</span>
                                </div>
                            }
                            {overview &&
                                <div>
                                    <b>Overview</b>: <span>{overview}</span>
                                </div>
                            }
                        </ModalDataList>
                    
                        {/* Rating Form */}
                        <div>
                            <h1>Rate it!</h1>
                        </div>
                    </ModalRightContent>
                </ModalContent>
            </ModalContainer>
        </ModalWrapper>
    )
}

export default Modal;