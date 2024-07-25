import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import EmployeeTableView from "../views/EmployeeTableView.vue";
import EmployeeCreateView from "../views/EmployeeCreateView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path : "/employeetable", component : EmployeeTableView},
  { path: "/addemployee", component : EmployeeCreateView}
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
