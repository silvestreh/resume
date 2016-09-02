import award from 'components/award';
import decor from 'components/decor';
import education from 'components/education';
import experience from 'components/experience';
import recommendation from 'components/recommendation';
import fetchJSON from 'src/helpers/fetch-json';

export default {
    name: 'resume-section',

    components: {
        award,
        decor,
        education,
        experience,
        recommendation,
    },

    data() {
        return {
            awards: [],
            education: [],
            experience: [],
            recommendations: [],
        };
    },

    /* istanbul ignore next */
    ready() {
        fetchJSON(this, 'awards');
        fetchJSON(this, 'education');
        fetchJSON(this, 'experience');
        fetchJSON(this, 'recommendations');
    },
};
