<script setup lang="ts"></script>

<template>
    <div
        className="flex flex-col flex-wrap justify-center items-center min-h-screen bg-gradient-to-b from-sky-400 to-cyan-400 py-20 sm:py-10">
        <img src="../assets/home-bg-image.png" className="w-1/2 sm:w-1/4">
        <div className="text-lg sm:text-5xl font-bold w-full text-center my-4 sm:my-10">Employee Management System</div>
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
            <a href="/employeetable"
                className="bg-red-600 p-5 text-white font-bold rounded-3xl shadow-lg hover:scale-[1.05] hover:cursor-pointer transition delay-100 ease-in-out hover:bg-red-700">View
                Employee
                Details
                -></a>
        </div>
    </div>
</template>

<style scoped></style>
