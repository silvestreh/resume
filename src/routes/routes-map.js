import about from 'routes/about';
import home from 'routes/home';
import notFound from 'routes/not-found';
import resume from 'routes/resume';

export default {
    '*': {
        component: notFound,
    },
    '/': {
        component: home,
    },
    '/about': {
        component: about,
    },
    '/resume': {
        component: resume,
    },
};
