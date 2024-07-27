import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import EmployeeTableView from "../views/EmployeeTableView.vue";
import EmployeeCreateView from "../views/EmployeeCreateView.vue";
import EmployeeView from "../components/EmployeeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/employeetable", component: EmployeeTableView },
  { path: "/addemployee", component: EmployeeCreateView },
  { path: "/employee/:id", component: EmployeeView }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
