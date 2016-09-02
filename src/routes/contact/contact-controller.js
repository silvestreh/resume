import decor from 'components/decor';

const URL = `${(location.protocol || 'http:')}//${location.hostname}`;

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

    methods: {
        send() {
            this.$http.post(URL, this.data)
                .then(() => this.$log('Message sent!'))
                .catch(() => this.$log('Error'));
        }
    },
};
