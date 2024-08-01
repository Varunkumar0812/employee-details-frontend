import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import EmployeeTableView from "@/views/EmployeeTableView.vue";
import EmployeeCreateView from "@/views/EmployeeCreateView.vue";
import EmployeeView from "@/components/EmployeeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/employeetable", component: EmployeeTableView, meta: { requiresAuth: true } },
  { path: "/addemployee", component: EmployeeCreateView, meta: { requiresAuth: true } },
  { path: "/employee/:id", component: EmployeeView, meta: { requiresAuth: true } },
  { path: "/signin", component: LoginView },
  { path: "/signup", component: RegisterView }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isValid = localStorage.getItem("token");

  if (to.matched.some(record => record.meta.requiresAuth) && !isValid) {
    next('/signin');
  } else {
    next();
  }
})

export default router;