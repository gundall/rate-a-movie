function debouncer(fn, msCustom) {
    const ms = msCustom ? msCustom : 1000;
    let temporizador;
    return () => {
        clearTimeout(temporizador);
        temporizador = setTimeout(() => {
            temporizador = null;
            fn.apply(this, arguments);
        }, ms);
    };
};

export {
    debouncer
};