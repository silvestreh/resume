import Vue from 'vue';
import VueResource from 'vue-resource';
import resume from 'routes/resume';
import fetchJSON from 'src/helpers/fetch-json';

// Static data
import awards from '../../../../static/json/awards.json';
import education from '../../../../static/json/education.json';
import experience from '../../../../static/json/experience.json';
import recommendations from '../../../../static/json/recommendations.json';

Vue.use(VueResource);

describe('Resume route', () => {
    it('should have default data', () => {
        const data = resume.data();
        expect(typeof data).to.equal('object');
    });

    it('should fetch JSON data', (done) => {
        Vue.http.interceptors.push((request, next) => {
            let res;

            switch (request.url) {
            case '/static/json/awards.json': {
                res = {
                    status: 200,
                    statusText: 'Ok',
                    ok: true,
                    data: awards,
                };
                break;
            }
            case '/static/json/education.json': {
                res = {
                    status: 200,
                    statusText: 'Ok',
                    ok: true,
                    data: education,
                };
                break;
            }
            case '/static/json/experience.json': {
                res = {
                    status: 200,
                    statusText: 'Ok',
                    ok: true,
                    data: experience,
                };
                break;
            }
            case '/static/json/recommendations.json': {
                res = {
                    status: 200,
                    statusText: 'Ok',
                    ok: true,
                    data: recommendations,
                };
                break;
            }
            default: {
                res = {
                    status: 404,
                    statusText: 'Not found',
                    ok: false,
                    data: 'NOT FOUND',
                };
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
