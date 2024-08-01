<script setup lang="ts">
import { ref } from "vue";
import axios from 'axios';
import router from "../router";
import type { UserData } from "@/assets/EmployeeDataInterface";

const username = ref("");
const email = ref("");
const password = ref("");
const conPassword = ref("");
const emailError = ref(false);
const nameError = ref(false);
const passError = ref(false);

const allTrim = () => {
    username.value = username.value.trim();
    email.value = email.value.trim();
    password.value = password.value.trim();
    conPassword.value = conPassword.value.trim();
}

const handleRegister = async () => {
    allTrim();
    passError.value = password.value != conPassword.value ? true : false;

    const token = await axios.post("http://localhost:3333/register", { email: email.value, username: username.value, password: password.value });

    console.log(token);

    if (token.data == 1062) {
        emailError.value = true;
        nameError.value = true;
    }
    else {
        console.log(token.data.token)
        localStorage.setItem("token", token.data.token);
        router.push("/employeetable");
    }

    /* 
        users.map((el: UserData) => {
            nameError.value = el.username === username.value ? true : false;
            emailError.value = el.email === email.value ? true : false;
        });
    
    
        if (!nameError.value && !emailError.value && !passError.value) {
            const user = await axios.post("http://localhost:5000/users", { username: username.value, password: password.value, email: email.value });
    
            console.log(user);
    
            localStorage.setItem("key", JSON.stringify({ validated: true, username: username.value }))
            return router.push("/employeetable");
        } */
}

</script>

<template>
    <div class="flex justify-center items-center bg-sky-500 min-h-screen">
        <div class="w-1/3 bg-white p-10 rounded-md shadow-xl">
            <div class="text-2xl text-center font-bold mb-10">Sign Up</div>
            <div class="w-full my-3 pr-5 text-lg">
                <label class="w-full m-2">Username</label>
                <input v-model="username" class="w-full m-2 border border-1 border-slate-300 rounded-sm p-2" type="text"
                    required />
            </div>
            <div class="w-full my-3 pr-5 text-lg">
                <label class="w-full m-2">Email ID</label>
                <input v-model="email" class="w-full m-2 border border-1 border-slate-300 rounded-sm p-2" type="text"
                    required />
            </div>
            <div class="w-full my-3 pr-5 text-lg">
                <label class="w-full m-2">Password</label>
                <input v-model="password" class="w-full m-2 border border-1 border-slate-300 rounded-sm p-2"
                    type="password" required />
            </div>
            <div class="w-full my-3 pr-5 text-lg">
                <label class="w-full m-2">Confirm Password</label>
                <input v-model="conPassword" class="w-full m-2 border border-1 border-slate-300 rounded-sm p-2"
                    type="password" required />
            </div>
            <div class="text-red-500 px-5 text-center">
                <div v-show="emailError">Email ID already in use</div>
                <div v-show="nameError">Username already in use</div>
                <div v-show="passError">Passwords doesn't match</div>
            </div>
            <div class="w-full flex justify-center mt-10">
                <v-btn @click="handleRegister" size="large" color="green" class="capitalize">Register</v-btn>
            </div>
        </div>
    </div>
</template>

<style scoped></style>