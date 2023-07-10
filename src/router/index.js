import { createRouter, createWebHistory } from 'vue-router';
import DetailProduct from '../components/DetailProduct.vue';
import CartPyments from '../components/CartPyments.vue';
import DefaultText from '../components/DefaultText.vue';

const routes = [
    {
      path: '/',
      name: 'DefaultText',
      component: DefaultText
    },
    {
      path: '/detailProduct/:id',
      name: 'DetailProduct',
      component: DetailProduct,
      props: true
    },
    {
      path: '/cartPyments',
      name: 'CartPyments',
      component: CartPyments
    }
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () =>({ top : 0 }),
  });

export default router
