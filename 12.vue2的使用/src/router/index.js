import VueRouter from 'vue-router'
import App from '../App.vue'
import Vue from 'vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: '',
          name: 'provide-inject',
          component: () =>
            import(
              /*webpackChunkName: "provide-inject" */ '../views/provide-inject/index.vue'
            ),
        },
        {
          path: 'throttle',
          name: 'throttle',
          component: () =>
            import(/*webpackChunkName: "throttle" */ '../views/throttle.vue'),
        },
        {
          path: 'lazy',
          name: 'lazy',
          component: () =>
            import(/*webpackChunkName: "lazy" */ '../views/lazy.vue'),
        },
        {
          path: 'test-router',
          name: 'test-router',
          component: () =>
            import(
              /*webpackChunkName: "test-router" */ '../views/testRouter.vue'
            ),
        },
      ],
    },
  ],
})