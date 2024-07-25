<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import "primeicons/primeicons.css"


let employees = ref([]);

const res = await axios.get("http://localhost:5000/employees");
employees = res.data;

const deleteMode = ref(false);

const deleteEmployee = async (id: number) => {
    const res = await axios.delete(`http://127.0.0.1:5000/employees/${id}`)

    window.location.reload();
}


</script>

<template>
    <div className="min-h-screen bg-gradient-to-b from-sky-600 to-cyan-400 py-10 ">
        <div className="w-full flex justify-center items-center text-lg sm:text-3xl my-10 font-semibold">
            Total number of Employees : {{ employees.length }}
            <div className="font-normal">
                <a href="/addemployee"
                    className="bg-green-500 text-lg p-3 rounded-xl mx-10 hover:bg-green-800 hover:cursor-pointer hover:text-white shadow-2xl">Add
                    New
                    Employee</a>
                <a v-on:click="deleteMode = !deleteMode"
                    className="bg-red-500 text-lg p-3 rounded-xl hover:bg-red-800 hover:cursor-pointer hover:text-white shadow-xl">Delete
                    Employees</a>
            </div>
        </div>
        <div className="w-full px-4 sm:px-20">
            <table className="w-full table-auto bg-white shadow-2xl">
                <tr className="font-bold text-sm sm:text-lg bg-slate-300">
                    <td v-for="x in Object.keys(employees[0])">{{ x.toUpperCase() }}
                    </td>
                    <td v-show="deleteMode"></td>
                </tr>
                <tr v-for="x in employees">
                    <td v-for="y in x">{{ y }}</td>
                    <td v-show="deleteMode">
                        <a v-show="deleteMode" v-on:click="deleteEmployee(x.id)"
                            className="bg-red-500 p-2 rounded-lg hover:bg-red-900 hover:text-white hover:cursor-pointer mx-2">
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
</style>