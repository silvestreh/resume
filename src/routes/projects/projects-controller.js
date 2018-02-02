import project from 'components/project';
import projectsJson from '../../json/projects/projects.json';

export default {
    name: 'projects-section',

    components: {
        project,
    },

    data() {
        return {
            projects: projectsJson.data,
        };
    },
};
