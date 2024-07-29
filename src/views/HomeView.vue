<script setup lang="ts">
import router from "../router";
import { onMounted, onBeforeMount, onUnmounted, onBeforeUnmount, onUpdated, onBeforeUpdate, reactive, provide } from "vue";

const data = { name: "Varunkumar R" }

onBeforeMount(() => {
    console.log("Before Mounting !!");
})

onMounted(() => {
    console.log("Mounted !!");
    data.name = "Raja S";
})

onBeforeUpdate(() => {
    console.log("Before Updated !!");
})

onUpdated(() => {
    console.log("Updated !!");
})

onBeforeUnmount(() => {
    console.log("Before Unmounted !!")
})

onUnmounted(() => {
    console.log("Unmounted !!")
})

</script>

<template>
    <div
        className="flex flex-col flex-wrap justify-center items-center min-h-screen bg-gradient-to-b from-sky-400 to-cyan-400 py-20 sm:py-10">
        <img src="../assets/home-bg-image.png" className="w-1/2 sm:w-1/4">
        <div className="text-lg sm:text-5xl font-bold w-full text-center my-4 sm:my-10">Employee Management System</div>
        <div>Author : {{ data.name }}</div>
        <div className="text-sm sm:text-lg text-center w-1/2 my-4 sm:my-10">Our Employee Management App streamlines HR
            operations by
            providing
            an
            intuitive
            interface to manage
            employee records. It offers features like an employee directory, detailed profiles, and role-based access
            controls to ensure data security and easy administration. Built with modern web technologies, the app
            ensures a seamless and efficient user experience.
        </div>
        <div className="w-full text-center">
            <v-btn size="x-large" rounded="xl" color="red" @click="router.push('/employeetable')">View Employee
                Details</v-btn>
        </div>
    </div>
</template>

<style scoped></style>
