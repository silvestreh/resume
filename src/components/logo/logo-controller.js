import eventHandler from 'src/helpers/event-handler';

export default {
    ready() {
        this.$el.addEventListener('mousemove', eventHandler);
    },

    beforeDestroy() {
        this.$el.removeEventListener('mousemove', eventHandler);
    },
};
