import SignUp from '../pages/SignUp.jsx'
import SignIn from '../pages/SignIn.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import Create from '../pages/Create.jsx'

const router = [
    {
        path: '/',
        component: SignUp,
    },
    {
        path: '/sign-in',
        component: SignIn,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/create',
        component: Create,
    },
]

export default router
