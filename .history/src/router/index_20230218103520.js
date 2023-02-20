import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'first',
      component: () => import('../views/FirstPageView.vue')
    },

    {
      path: '/second',
      name: 'secondPage',
      component: () => import('../views/SecondPageView.vue')
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import('../views/EditView.vue'),
      props: true
    },
   
  ],
});

export default router;
