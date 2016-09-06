function eventHandler(e) {
    const eX = e.offsetX;
    const eY = e.offsetY;
    const w	= window.innerWidth / 2;
    const h	= window.innerHeight / 2;
    const tiltLimit	= 15;
    const posX = (h - eY) * (tiltLimit / h);
    const posY = (w - eX) * (tiltLimit / w) * -1;
    const name = document.querySelector('.name');
    const title = document.querySelector('.title');

    name.style.transform = `rotateX(${posX}deg) rotateY(${posY}deg) translate3d(-50%, -50%, 2rem)`;
    title.style.transform = `rotateX(${posX}deg) rotateY(${posY}deg) translate3d(-50%, -50%, -2rem)`;
}

export default {
    ready() {
        document.querySelector('.logo')
            .addEventListener('mousemove', eventHandler);
    },

    beforeDestroy() {
        document.querySelector('.logo')
            .removeEventListener('mousemove', eventHandler);
    },
};

