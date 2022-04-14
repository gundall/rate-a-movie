import React from "react";
import {
    ModalClose,
    ModalContainer,
    ModalContent,
    ModalDataList,
    ModalImage,
    ModalHeader,
    ModalLeftContent,
    ModalRatingContainer,
    ModalRightContent,
    ModalWrapper
} from './ModalStyled';
import Stars from '../Stars/Stars';

const DEFAULT_MOVIE_POSTER = process.env.REACT_APP_DEFAULT_MOVIE_POSTER;

const Modal = (props) => {
    const {data, onModalClose, onMovieRated, readOnly} = props;
    const {original_language, original_title, overview, poster_path, rating, release_date, title} = data;
    const 	useDefaultImage = !poster_path || poster_path === null || poster_path === '',
			imageUrl = useDefaultImage
				? DEFAULT_MOVIE_POSTER
				: `${process.env.REACT_APP_MOVIES_POSTER_BASE_URL}${poster_path}`; // Viene con '/' delante

    console.log(data);

    const handleModalClose = (e) => {
        onModalClose();
    }
    const handleOusideModalClick = (e) => {
        const target = e.target;
        /modal-backdrop/.test(target.id)
            && onModalClose();
    }
    const handleMovieRated = (rating) => {
        (rating && rating) > 0
            && onMovieRated(rating);
    }

    return (
        <ModalWrapper
            id="modal-backdrop"
            onClick={handleOusideModalClick}
        >
            <ModalContainer>
                {/* HEADER */}
                <ModalHeader>
                    <ModalClose onClick={handleModalClose} />
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
                            <h2>
                                {title && title !== ""
                                    ? title
                                    : 'Untitled'
                                }
                            </h2>
                            {original_title &&
                                <div>
                                    <b>Original Title</b>: <span>{original_title}</span>.
                                </div>
                            }
                            {release_date &&
                                <div>
                                    <b>Release date</b>: <span>{release_date}</span>.
                                </div>
                            }
                            {original_language &&
                                <div>
                                    <b>Language</b>: <span>{original_language.toUpperCase()}</span>.
                                </div>
                            }
                            {overview &&
                                <div>
                                    <b>Overview</b>: <span>{overview}</span>
                                </div>
                            }
                        </ModalDataList>
                    
                        {/* Rating Form */}
                        <ModalRatingContainer>
                            <h2>
                                {readOnly
                                    ? 'You rated'
                                    : 'Rate it!'
                                }:
                            </h2>
                            <Stars
                                onStarClicked={handleMovieRated}
                                rating={rating}
                                readOnly={readOnly}
                            />
                        </ModalRatingContainer>
                    </ModalRightContent>
                </ModalContent>
            </ModalContainer>
        </ModalWrapper>
    )
}

export default Modal;