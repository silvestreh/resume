import Vue from 'vue';
import contact from 'routes/contact';

describe('Contact route', () => {
    let vm;

    beforeEach((done) => {
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
});
