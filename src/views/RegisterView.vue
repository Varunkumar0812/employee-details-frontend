<script setup>
import { ref } from "vue";
import axios from 'axios';
import router from "../router";

const username = ref("");
const email = ref("");
const password = ref("");
const conPassword = ref("");
const users = ref([]);
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

    const users = (await axios.get("http://localhost:5000/users")).data;

    users.map(el => {
        nameError.value = el.username === username.value ? true : false;
        emailError.value = el.email === email.value ? true : false;
    });


    if (!nameError.value && !emailError.value && !passError.value) {
        const user = await axios.post("http://localhost:5000/users", { username: username.value, password: password.value, email: email.value });

        console.log(user);

        localStorage.setItem("key", "validated")
        return router.push("/employeetable");
    }
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