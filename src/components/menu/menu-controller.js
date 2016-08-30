export default {
    data() {
        return {
            showMenuItems: false,
        };
    },

    methods: {
        toggleMenu() {
            this.showMenuItems = !this.showMenuItems;
        },
    },
};
