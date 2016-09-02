import decor from 'components/decor';
import toastr from 'toastr';

const URL = `http://${location.hostname}:3000`;
toastr.options.positionClass = 'toast-bottom-left';

export default {
    name: 'contact-section',

    components: {
        decor,
    },

    data() {
        return {
            sent: false,
            formData: {
                email: '',
                message: '',
                name: '',
            },
        };
    },

    methods: {
        send() {
            this.$http.post(URL, this.formData)
                .then(this.handleSuccess)
                .catch(this.catchError);
        },

        handleSuccess() {
            this.sent = true;
            toastr.success('Message sent!');
        },

        catchError() {
            this.sent = false;
            toastr.error('Yeah, no. That didn\'t work');
        },
    },

};
