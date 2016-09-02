import decor from 'components/decor';

export default {
    name: 'contact-section',

    components: {
        decor,
    },

    data() {
        return {
            email: '',
            message: '',
            name: '',
        };
    },
};
