import Vue from 'vue';
import logo from 'src/components/logo';

describe('Logo component', () => {
    let vm;

    beforeEach((done) => {
        vm = new Vue({
            template: `<div>
                <logo v-ref:logo-component></logo>
            </div>`,

            components: {
                logo,
            },
        }).$mount();

        vm.$nextTick(() => done());
    });

    it('should render the logo', () => {
        expect(vm.$el.querySelector('svg')).not.to.equal(undefined);
        expect(Array.from(vm.$el.querySelectorAll('img')).length).to.equal(2);
    });

    it('should have basic lifecycle hooks', () => {
        expect(typeof logo.ready).to.equal('function');
        expect(typeof logo.beforeDestroy).to.equal('function');
        logo.ready.apply(vm);
        logo.beforeDestroy.apply(vm);
    });
});
