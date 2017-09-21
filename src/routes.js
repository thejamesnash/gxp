import Home from './Home';
import buttons from './pages/buttons';
import inputs from './pages/inputs';
import notifications from './pages/notifications';
import stepIndicator from './pages/step-indicator';
import Test from './components/test';
import Users from './components/users';

export default [
    { path: '/components', component: Home },
    { path: '/components/buttons', component: buttons },
    { path: '/components/inputs', component: inputs },
    { path: '/components/notifications', component: notifications },
    { path: '/components/step-indicator', component: stepIndicator },
    { path: '/test', component: Test }
]
