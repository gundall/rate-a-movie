import React, {
    useState,
    useEffect
} from "react";
import PropTypes from 'prop-types';

import {
    debouncer
 } from '../../utils/debouncer.js'

const Resizer = (props) => {
    const { children, onResize, ms } = props;
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    useEffect(() => {
        // Aplicamos un debound para evitar re-renders contínuos.
        const handleResizeDebound = debouncer(function handleResize() {
            onResize();
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }, ms);
      
        window.addEventListener('resize', handleResizeDebound);

        return () => window.removeEventListener('resize', handleResizeDebound)
    }, [dimensions]);

    // Uso React.Fragment para evitar warning "React is defined but never used".
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
}

export default Resizer;

Resizer.propTypes = {
    onResize: PropTypes.func.isRequired
}