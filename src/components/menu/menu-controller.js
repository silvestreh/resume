export default {
    data() {
        return {
            showMenuItems: false,
            sections: [
                {
                    name: 'Résumé',
                    path: '/resume',
                },
                {
                    name: 'Projects',
                    path: '/projects',
                },
                {
                    name: 'About',
                    path: '/about',
                },
                {
                    name: 'Contact',
                    path: '/contact',
                },
            ],
        };
    },

    methods: {
        toggleMenu() {
            this.showMenuItems = !this.showMenuItems;
        },

        hideMenu() {
            this.showMenuItems = false;
        },
    },
};
