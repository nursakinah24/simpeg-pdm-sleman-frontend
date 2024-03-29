// router/index.js
import {createRouter, createWebHistory} from 'vue-router';
import personalData from '../view/personalData.vue';
import dashboard from '../view/dashboard.vue';
import personalDocument from '../view/personalDocument.vue';
import employeeRank from '../view/employeeRank.vue';
import educationHistory from '../view/educationHistory.vue';
import training from '../view/training.vue';
import positionHistory from '../view/positionHistory.vue';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/personal-data',
    name: 'personalData',
    component: personalData
  },
  {
    path: '/personal-document',
    name: 'personalDocument',
    component: personalDocument
  },
  {
    path: '/employee-rank',
    name: 'employeeRank',
    component: employeeRank
  },
  {
    path: '/education-history',
    name: 'educationHistory',
    component: educationHistory
  },
  {
    path: '/training',
    name: 'training',
    component: training
  },
  {
    path: '/position-history',
    name: 'positionHistory',
    component: positionHistory
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
/* export default new Router({
  routes: [
    {
          path: '/',
          name: 'profile',
          component: Default,
    },
    {

    }
    // Add other routes as needed
  ],
}); */
