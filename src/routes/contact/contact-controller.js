import decor from 'components/decor';
import toastr from 'toastr';

const URL = `${(location.protocol || 'http:')}//${location.hostname}:3000`;
toastr.options.positionClass = 'toast-bottom-left';

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
            const data = {
                email: this.email,
                message: this.message,
                name: this.name,
            };
            this.$http.post(URL, data)
                .then(() => toastr.success('Message sent!'))
                .catch(() => toastr.error('Yeah, no. That didn\'t work'));
        }
    },
};
