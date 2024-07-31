<script setup lang="ts">
import { ref } from "vue";
import axios from 'axios';
import router from "../router";
import { type UserData } from "@/assets/EmployeeDataInterface";

const username = ref("");
const password = ref("");
const users = ref([]);
const invalidError = ref(false);

const loginCheck = async () => {
    const users = (await axios.get("http://localhost:5000/users")).data;
    console.log(users);

    const user = users.map((el: UserData) => {
        if (el.username === username.value || el.email === username.value) {
            if (el.password === password.value) {
                localStorage.setItem("key", "validated")
                return router.push("/employeetable");
            }
        }
    });

    invalidError.value = true;
}

</script>

<template>
    <div class="flex justify-center items-center bg-sky-500 min-h-screen">
        <div class="w-1/3 bg-white p-10 rounded-md shadow-xl">
            <div class="text-2xl text-center font-bold mb-10">Sign In</div>
            <div class="w-full my-3 pr-5 text-lg">
                <label class="w-full m-2">Username or Email ID</label>
                <input v-model="username" class="w-full m-2 border border-1 border-slate-300 rounded-sm p-2" type="text"
                    required />
            </div>
            <div class="w-full my-3 pr-5 text-lg">
                <label class="w-full m-2">Password</label>
                <input v-model="password" class="w-full m-2 border border-1 border-slate-300 rounded-sm p-2"
                    type="password" required />
            </div>
            <div class="text-red-500 px-5 text-center" v-show="invalidError">
                Invalid Username/Email ID or Password
            </div>
            <div class="w-full flex justify-center mt-10">
                <v-btn @click="loginCheck" size="large" color="green" class="capitalize">Login</v-btn>
            </div>
        </div>
    </div>
</template>

<style scoped></style>