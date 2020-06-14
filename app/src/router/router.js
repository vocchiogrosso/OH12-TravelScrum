// Imports
import Vue from 'vue'
import VueRouter from 'vue-router'
// Views(+)Pages
import Home from '../views/Home/Home'
import Auth from '../views/Auth/Auth.vue'
  import Login from '../views/Auth/Children/Login/Login.vue'
  import Register from '../views/Auth/Children/Register/Register.vue'
  import Reset from '../views/Auth/Children/Reset/Reset.vue'
  import Welcome from '../views/Auth/Children/Welcome/Welcome.vue'

import Dashboard from '../views/Dashboard/Dashboard.vue'
  import Main from '../views/Dashboard/Children/Main/Main.vue'
  import Impact from '../views/Dashboard/Children/Impact/Impact.vue'
  import Schedule from '../views/Dashboard/Children/Schedule/Schedule.vue'

import Booking from '../views/Booking/Booking.vue'
  import Search from '../views/Booking/Children/Search/Search.vue'
  import Summary from '../views/Booking/Children/Summary/Summary.vue'
  import Payment from '../views/Booking/Children/Payment/Payment.vue'
  import Receipt from '../views/Booking/Children/Receipt/Receipt.vue'

import Planner from '../views/Planner/Planner.vue'
  import Session from '../views/Planner/Children/Session/Session.vue'
  import Calendar from '../views/Planner/Children/Calendar/Calendar.vue'
//
import ErrorComp from '../views/Error/Error.vue'
  import E404 from '../views/Error/Children/404.vue'
//
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth,
    children: [
      {
        name:'Login',
        path:'login',
        component: Login
      },
      {
        name:'Register',
        path:'register',
        component: Register
      },
      {
        name:'Reset',
        path:'reset',
        component: Reset
      },
      {
        name:'Welcome',
        path:'welcome',
        component: Welcome
      }
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        name: 'Main',
        path: '',
        component: Main
      }
    ],
  },
  {
    path: '*',
    name: 'error',
    component: E404,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router;
