import { gsap } from 'gsap';

const shake = (target, rotation, time) => {
    const finalTime = time && typeof time === "number" ? time : 0.1;
    const finalRotation = rotation && typeof rotation === "number" ? rotation : 1;

    gsap.to(target, {
        duration: finalTime,
        onCompleteParams: [target],
        repeat: 1,
        rotate: finalRotation,
        yoyo: true,
        onComplete: (target) => {
            gsap.to(target, {
                duration: finalTime,
                repeat: 1,
                rotate: -finalRotation,
                yoyo: true
            });
        },
    });
}

export {
    shake
};