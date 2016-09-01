import Vue from 'vue';
import VueResource from 'vue-resource';
import resume from 'routes/resume';

Vue.use(VueResource);

describe('Resume route', () => {
    it('should have default data', () => {
        const data = resume.data();

        expect(typeof data).to.equal('object');
    });

    it('should fetch JSON data', (done) => {
        Vue.http.interceptors.push((request, next) => {
            const fakeData = {
                data: [
                    'Fake',
                ],
            };
            next(request.respondWith(fakeData, {
                status: 200,
            }));
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

        resume.ready.apply(instance);

        vm.$nextTick(() => {
            expect(instance.awards.length).to.equal(0);
            expect(instance.education.length).to.equal(0);
            expect(instance.experience.length).to.equal(0);
            expect(instance.recommendations.length).to.equal(0);
            done();
        });
    });
});
