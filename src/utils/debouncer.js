function debouncer(fn, msCustom) {
    const ms = msCustom ? msCustom : 1000;
    let temp;
    return () => {
        clearTimeout(temp);
        temp = setTimeout(() => {
            temp = null;
            fn.apply(this, arguments);
        }, ms);
    };
};

export {
    debouncer
};