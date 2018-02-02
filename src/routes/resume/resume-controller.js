import award from 'components/award';
import decor from 'components/decor';
import education from 'components/education';
import experience from 'components/experience';
import recommendation from 'components/recommendation';

import awardsJson from 'src/json/resume/awards.json';
import educationJson from 'src/json/resume/education.json';
import experienceJson from 'src/json/resume/experience.json';
import recommendationsJson from 'src/json/resume/recommendations.json';

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
            awards: awardsJson.data,
            education: educationJson.data,
            experience: experienceJson.data,
            recommendations: recommendationsJson.data,
        };
    },
};
