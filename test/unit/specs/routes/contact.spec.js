import Vue from 'vue';
import contact from 'routes/contact';

describe('Contact route', () => {
    let vm;

    beforeEach((done) => {
        Vue.http.interceptors.push((request, next) => {
            next((response) => {
                response.status = 200;
                response.statusText = 'Ok';
                response.ok = true;
                response.data = { ok: true, };
                return response;
            });
        });

        vm = new Vue({
            template: `<div>
                <contact v-ref:contact-section></contact>
            </div>`,

            components: {
                contact,
            },
        }).$mount();

        vm.$nextTick(() => done());
    });

    it('should have default data', () => {
        const data = contact.data();

        expect(typeof data).to.equal('object');
    });

    it('should send emails', (done) => {
        const instance = vm.$refs.contactSection;

        instance.send();

        setTimeout(() => {
            instance.handleSuccess();
            expect(instance.sent).to.equal(true);
            instance.catchError();
            expect(instance.sent).to.equal(false);
            done();
        }, 1000);
    });
});
