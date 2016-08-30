import Vue from 'vue';
import menu from 'src/components/menu';

// Mock v-link directive to supress errors
Vue.directive('link', {});

describe('Menu component', () => {
    let vm;

    beforeEach((done) => {
        vm = new Vue({
            template: `<div>
                <menu v-ref:menu-component></menu>
            </div>`,

            components: {
                menu,
            },
        }).$mount();

        vm.$nextTick(() => done());
    });

    it('should render the toggler', () => {
        expect(vm.$el.querySelector('button')).not.to.equal(undefined);
    });

    it('should have default data', () => {
        expect(vm.$refs.menuComponent.showMenuItems).to.equal(false);
    });

    it('should be able to toggle menu items', () => {
        expect(vm.$refs.menuComponent.showMenuItems).to.equal(false);
        vm.$refs.menuComponent.toggleMenu();
        expect(vm.$refs.menuComponent.showMenuItems).to.equal(true);
    });

    it('should have four items', () => {
        vm.$refs.menuComponent.toggleMenu();
        vm.$nextTick(() => {
            expect(Array.from(vm.$el.querySelectorAll('a')).length).to.equal(4);
        });
    });
});
