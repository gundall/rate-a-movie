import React, {
    useEffect,
    useRef,
    useState
} from 'react';

import Resizer from '../Resizer/Resizer';
import { tumble } from '../../utils/animations';
import {
    DynamicImg,
    NoResultsAnimationContainer,
    StaticImg
} from '../../themes/bn/NoResultsAnimationStyled';

import noResultsImage from '../../assets/desert.svg';
import tumbleImg from '../../assets/tumble.svg';

const NoResultsAnimation = () => {
    const dynamicRef = useRef();
    const [resizeDate, setResizeDate] = useState(Date.now());

    const handleResize = () => {
        setResizeDate(Date.now());
    }

    useEffect(() => {
        const controls = tumble(dynamicRef.current);
        
        controls('resume'); // Inicamos la animación nueva.
        
        return () => {
            controls('kill'); // Eliminamos la animación anterior.
        };
    }, [resizeDate]);

    return (
        <Resizer
            ms={100}
            onResize={handleResize}
        >
            <NoResultsAnimationContainer>
                <StaticImg src={noResultsImage} />
                <DynamicImg
                    ref={dynamicRef}
                    src={tumbleImg}
                />
            </NoResultsAnimationContainer>
        </Resizer>
    );
}

export default NoResultsAnimation;