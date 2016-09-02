import fetchJSON from 'src/helpers/fetch-json';
import project from 'components/project';

export default {
    name: 'projects-section',

    components: {
        project,
    },

    data() {
        return {
            projects: [],
        };
    },

    ready() {
        fetchJSON(this, 'projects/projects');
    },
};
