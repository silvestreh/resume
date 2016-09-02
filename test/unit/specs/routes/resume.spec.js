import Vue from 'vue';
import VueResource from 'vue-resource';
import resume from 'routes/resume';
import fetchJSON from 'src/helpers/fetch-json';

// Static data
import awards from '../../../../static/json/resume/awards.json';
import education from '../../../../static/json/resume/education.json';
import experience from '../../../../static/json/resume/experience.json';
import recommendations from '../../../../static/json/resume/recommendations.json';

Vue.use(VueResource);

describe('Resume route', () => {
    it('should have default data', () => {
        const data = resume.data();
        expect(typeof data).to.equal('object');
    });

    it('should fetch JSON data', (done) => {
        Vue.http.interceptors.push((request, next) => {
            let res;
            const successRes = {
                status: 200,
                statusText: 'Ok',
                ok: true,
            };
            const errorRes = {
                status: 404,
                statusText: 'Not found',
                ok: false,
                data: 'NOT FOUND',
            };

            switch (request.url) {
            case '/static/json/resume/awards.json': {
                res = Object.assign({ data: awards, }, successRes);
                break;
            }
            case '/static/json/resume/education.json': {
                res = Object.assign({ data: education, }, successRes);
                break;
            }
            case '/static/json/resume/experience.json': {
                res = Object.assign({ data: experience, }, successRes);
                break;
            }
            case '/static/json/resume/recommendations.json': {
                res = Object.assign({ data: recommendations, }, successRes);
                break;
            }
            default: {
                res = errorRes;
                break;
            }
            }

            next((response) => {
                response.status = res.status;
                response.statusText = res.statusText;
                response.ok = res.ok;
                response.data = res.data;
                return response;
            });
        });

        const vm = new Vue({
            template: `<div>
                <resume v-ref:resume-section></resume>
            </div>`,

            components: {
                resume,
            },
        }).$mount();

        const instance = vm.$refs.resumeSection;

        // Fetch all data through the READY hook
        resume.ready.apply(instance);

        // Try fetching something that doesn't exist
        fetchJSON(instance, 'doesNotExist');

        setTimeout(() => {
            expect(instance.awards.length).to.equal(1);
            expect(instance.education.length).to.equal(2);
            expect(instance.experience.length).to.equal(4);
            expect(instance.recommendations.length).to.equal(4);
            done();
        }, 1000);
    });
});
