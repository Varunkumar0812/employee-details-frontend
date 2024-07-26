<script setup lang="ts">
import { useRouter } from "vue-router";
import axios from "axios";

const route = useRouter();

const employeeId = route.currentRoute.value.params.id;
const employee = await axios.get(`http://127.0.0.1:5000/employees/${employeeId}`);

</script>

<template>
    <div className="min-h-screen bg-gradient-to-b from-sky-600 to-cyan-400 py-10 ">
        <div className="text-center font-bold text-3xl">
            Employee Details
        </div>
        <div v-for="[key, value] in Object.entries(employee.data)">
            {{ key }} : {{ value }}
        </div>
    </div>
</template>

<style scoped></style>