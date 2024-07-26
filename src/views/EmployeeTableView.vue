<script setup lang="ts">
import router from "../router";
import axios from "axios";
import { ref, onMounted } from "vue";
import "primeicons/primeicons.css"
import { useEmployeeStore } from "@/stores/employeeStore";

const store = useEmployeeStore();

await store.fetchEmployees();

const employees = ref(store.employees);

const deleteMode = ref(false);

const handleDelete = async (id: string) => {
    await store.deleteEmployee(id);
    window.location.reload();
}

const handleDetails = (id: string) => {
    router.push(`/employee/${id}`);
}

</script>

<template>
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-cyan-100 py-10 ">
        <div
            className="w-full flex flex-wrap lg:flex-nowrap justify-center items-center text-sm lg:text-3xl my-10 font-semibold">
            <button @click="router.push('/')"
                class="text-sm lg:text-lg bg-orange-500 hover:bg-orange-800 rounded-lg shadow-lg p-1 lg:p-2 mx-5 lg:mx-10 hover:text-white">
                Go Back
            </button>
            Total number of Employees : {{ employees.length }}
            <div className="font-normal flex flex-wrap lg:flex-nowrap">
                <a href="/addemployee"
                    className="bg-green-500 text-sm lg:text-lg p-1 lg:p-3 rounded-xl lg:mx-10 hover:bg-green-800 hover:cursor-pointer hover:text-white shadow-2xl">Add
                    New
                    Employee</a>
                <a v-on:click="deleteMode = !deleteMode"
                    className="bg-red-500 text-sm lg:text-lg p-1 lg:p-3 rounded-xl hover:bg-red-800 hover:cursor-pointer hover:text-white shadow-xl"><span
                        v-show="!deleteMode">Delete
                        Employees</span>
                    <span v-show="deleteMode">Cancel Operation</span></a>
            </div>
        </div>
        <div className="w-full px-4 sm:px-20">
            <table className="w-full table-fixed lg:table-auto bg-white shadow-2xl">
                <tr className="font-bold text-sm sm:text-lg bg-slate-300">
                    <td v-for="x in Object.keys(employees[0])">{{ x.toUpperCase() }}
                    </td>
                    <td>MORE DETAILS</td>
                    <td v-show="deleteMode"></td>
                </tr>
                <tr v-for="x in employees">
                    <td v-for="y in x">{{ y }}</td>
                    <td>
                        <a v-on:click="handleDetails(x.id)"
                            className="bg-purple-500 p-1 lg:p-2 rounded-lg hover:bg-purple-900 hover:text-white hover:cursor-pointer mx-2">
                            More Details
                        </a>
                    </td>
                    <td v-show="deleteMode">
                        <a v-show="deleteMode" v-on:click="handleDelete(x.id)"
                            className="bg-red-500 p-1 lg:p-2 rounded-lg hover:bg-red-900 hover:text-white hover:cursor-pointer mx-2">
                            <i class="pi pi-trash"></i>
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
td {
    border: solid 1px black;
    padding: 10px;
}
</style>import type { useEmployeeStore } from "@/stores/employeeStore";
