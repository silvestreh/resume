import Vue from 'vue';
import VueResource from 'vue-resource';
import resume from 'src/sections/resume';
import fetchJSON from 'src/helpers/fetch-json';

Vue.use(VueResource);

Vue.http.interceptors.push((request, next) => {
    next((response) => {
        response.body = {
            data: [
                'Hello',
            ],
        };
    });
});

describe('Resume section', () => {
    let vm;

    beforeEach((done) => {
        vm = new Vue({
            template: `<div>
                <resume v-ref:resume-section></resume>
            </div>`,

            components: {
                resume,
            },
        }).$mount();

        vm.$nextTick(() => done());
    });

    it('should have default data', () => {
        const data = resume.data();

        expect(typeof data).to.equal('object');
    });

    it('should fetch JSON data', (done) => {
        const instance = vm.$refs.resumeSection;

        fetchJSON(instance, 'awards');
        vm.$nextTick(() => {
            expect(instance.awards.length).to.equal(0);
            done();
        });
    });
});
