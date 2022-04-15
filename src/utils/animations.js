import { gsap } from 'gsap';

const checkValidTarget = (target) => {
    return target && target != null && (!Array.isArray(target) || target.length > 0);
}

const shake = (target, rotation, time, callback) => {
    if (!checkValidTarget(target))
        return;

    const finalTime = time && typeof time === "number" ? time : 0.1;
    const finalRotation = rotation && typeof rotation === "number" ? rotation : 1;
    const finalCallback = callback && typeof callback === "function" ? callback : () => {};

    gsap.to(target, {
        duration: finalTime,
        onComplete: (target) => {
            gsap.to(target, {
                duration: finalTime,
                onComplete: finalCallback,
                onCompleteParams: [target],
                repeat: 1,
                rotate: -finalRotation,
                yoyo: true
            });
        },
        onCompleteParams: [target],
        repeat: 1,
        rotate: finalRotation,
        yoyo: true
    });
};

const beat = (target, factor, time, repeats, callback) => {
    if (!checkValidTarget(target))
        return;

    const finalTime = time && typeof time === "number" ? time : 0.1;
    const finalFactor = factor && typeof factor === "number" ? factor : 1.2;
    const finalRepeats = repeats && typeof repeats === "number" ? repeats : 1;
    const finalCallback = callback && typeof callback === "function" ? callback : () => {};

    gsap.to(target, {
        duration: finalTime,
        onComplete: (target) => {
            gsap.to(target, {
                duration: finalTime,
                onCompleteParams: [target],
                onComplete: finalCallback,
                repeat: finalRepeats,
                scale: 1,
                yoyo: true
            });
        },
        onCompleteParams: [target],
        repeat: finalRepeats,
        scale: finalFactor,
        yoyo: true
    });
};

export {
    beat,
    shake
};