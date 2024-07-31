<script setup lang="ts">
import router from "../router";
import axios from "axios";
import { ref, onBeforeMount, onMounted, computed, watch, watchEffect } from "vue";
import "primeicons/primeicons.css"
import { useEmployeeStore } from "@/stores/employeeStore";


const store = useEmployeeStore();
const userData = ref();

/* watchEffect(() => {
    console.log(localStorage.getItem("key") !== "validated");

    if (localStorage.getItem("key") !== "validated") {
        return location.href = "/";
    }
}) */

onBeforeMount(async () => {
    try {
        console.log("Hello")
        await store.fetchEmployees();
    }
    catch (err) {
        console.log(err);
    }
});

// await store.fetchEmployees();

const employees = computed(() => (store.employees));

console.log(employees);

const deleteMode = ref(false);

const handleDelete = async (id: string) => {
    await store.deleteEmployee(id);
    window.location.reload();
}

const handleDetails = (id: string) => {
    router.push(`/employee/${id}`);
}

const logOut = () => {
    localStorage.clear();
    router.push("/");
}

</script>

<template>
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-cyan-100 py-10 ">
        <div
            className="w-full flex flex-wrap lg:flex-nowrap justify-center items-center text-sm lg:text-3xl my-10 font-semibold">
            <v-btn color="black" class="capitalize" @click="logOut()">Log Out</v-btn>
            <v-btn variant="tonal" color="orange" @click="router.push('/')" class="mx-10 capitalize">
                Go Back
            </v-btn>
            Total number of Employees : {{ employees.length }}
            <div className="font-normal flex flex-wrap items-center lg:flex-nowrap">
                <v-btn color="green" @click="router.push('/addemployee')" class="mx-5 capitalize">
                    Add New Employee
                </v-btn>
                <v-btn color="red" @click="deleteMode = !deleteMode" class="capitalize">
                    <span v-show="!deleteMode">Delete Employees</span>
                    <span v-show="deleteMode">Cancel Operation</span>
                </v-btn>
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
                        <v-btn variant="tonal" color="purple" @click="handleDetails(x.id)" class="capitalize">
                            More Details
                        </v-btn>
                    </td>
                    <td v-show="deleteMode">
                        <v-btn v-show="deleteMode" variant="flat" color="red" @click="handleDelete(x.id)"
                            class="capitalize">
                            <i class="pi pi-trash"></i>
                        </v-btn>
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
