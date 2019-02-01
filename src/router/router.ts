import Vue from 'vue';
import Router from 'vue-router';
import Login from '../modules/login/login';
import Demo from '../modules/demo/demo';
import DefaultMainLayout from '../components/layout/default-main-layout';
import ApiManagement from '../modules/wms/api-management';
import auth from "../shared/auth";


const SHIPMENT = 'SHIPMENT';
Vue.use(Router);
let router = new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'Login'}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/wms',
      name: 'Wms',
      component: DefaultMainLayout,
      children: [
        {
          path: '/api-management',
          name: 'ApiManagement',
          component: ApiManagement
        }
      ]
    }

  ]
});


router.beforeEach( async (to, from, next) => {

  if (to.name === 'Login') {
    next();
  } else {
    if (auth.isSignIn()) {
      await auth.initialRequiredUserInfo();
      next();
    } else {
      next({replace: true, name: 'Login'});
    }
  }

});

export default router;
