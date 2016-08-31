import home from 'sections/home';
import notFound from 'sections/not-found';
import resume from 'sections/resume';

export default {
    '*': {
        component: notFound,
    },
    '/': {
        component: home,
    },
    '/resume': {
        component: resume,
    },
};
