import home from 'sections/home';
import notFound from 'sections/not-found';

export default {
    '*': {
        component: notFound,
    },
    '/': {
        component: home,
    },
};
