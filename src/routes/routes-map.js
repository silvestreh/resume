import about from 'routes/about';
import contact from 'routes/contact';
import home from 'routes/home';
import notFound from 'routes/not-found';
import projects from 'routes/projects';
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
    '/contact': {
        component: contact,
    },
    '/projects': {
        component: projects,
    },
    '/resume': {
        component: resume,
    },
};
