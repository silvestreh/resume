import Vue from 'vue';
import VueResource from 'vue-resource';
import projects from 'routes/projects';

// Static data
import allProjects from '../../../../static/json/projects/projects.json';

Vue.use(VueResource);

describe('Projects route', () => {
    it('should have default data', () => {
        const data = projects.data();
        expect(typeof data).to.equal('object');
    });

    it('should fetch JSON data', (done) => {
        Vue.http.interceptors.push((request, next) => {
            next((response) => {
                response.status = 200;
                response.statusText = 'Ok';
                response.ok = true;
                response.data = allProjects;
                return response;
            });
        });

        const vm = new Vue({
            template: `<div>
                <projects v-ref:projects-section></projects>
            </div>`,

            components: {
                projects,
            },
        }).$mount();

        const instance = vm.$refs.projectsSection;

        // Fetch all data through the READY hook
        projects.ready.apply(instance);

        setTimeout(() => {
            expect(instance.projects.length).to.equal(4);
            done();
        }, 1000);
    });
});
