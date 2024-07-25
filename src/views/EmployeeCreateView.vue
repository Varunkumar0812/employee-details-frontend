<script setup lang="ts">
import { ref } from 'vue';
import axios from "axios";
import router from "../router";

let name = ref("");
let role = ref("");
let salary = ref(0);
let pincode = ref(0);
let mobile = ref(0);

let address_line1 = ref("");
let address_line2 = ref("");

let name_error = ref("");
let pincode_error = ref("");
let mobile_error = ref("");

const addEmployee = async () => {
    name_error.value = name.value.length >= 50 ? "Name must be less than 50 characters" : "";
    pincode_error.value = (pincode.value + "").length != 6 ? "Pincode must be 6 characters" : "";
    mobile_error.value = (mobile.value + "").length != 10 ? "Mobile number must be 10 characters" : "";

    if (name_error.value == "" && pincode_error.value == "" && mobile_error.value == "") {
        let data = {
            name: name.value,
            role: role.value,
            salary: salary.value,
            address: address_line1.value + ", " + address_line2.value,
            pincode: pincode.value,
            mobile: mobile.value
        };

        console.log(data);
        const res = await axios.post("http://127.0.0.1:5000/employees", JSON.stringify(data));

    }
    router.push("/employeetable");
}

</script>

<template>
    <div className="flex justify-center flex-wrap py-10 bg-gradient-to-b from-sky-400 to-cyan-400 min-h-screen">
        <div className="w-full text-center text-4xl font-semibold font-poppins">Create New Employee</div>
        <form @submit.prevent="addEmployee"
            className="w-4/5 lg:w-1/3 flex flex-wrap justify-center bg-white/100 p-10 my-10 text-lg rounded-xl shadow-2xl">
            <div className="w-full flex flex-wrap sm:flex-nowrap justify-between my-2">
                <label>Name of employee</label>
                <input type="text" v-model="name" required maxlength="50"
                    className="rounded-sm border border-1 border-black/50 px-2 text-gray-500" />
            </div>
            <div v-show="name_error" className="text-red-500 text-sm">{{ name_error }}</div>
            <div className="w-full flex flex-wrap sm:flex-nowrap justify-between my-2">
                <label>Role of employee</label>
                <input type="text" v-model="role" required
                    className="rounded-sm border border-1 border-black/50 px-2 text-gray-500" />
            </div>
            <div className="w-full flex flex-wrap sm:flex-nowrap justify-between my-2">
                <label>Salary of employee</label>
                <input type="number" v-model="salary" required
                    className="rounded-sm border border-1 border-black/50 px-2 text-gray-500" />
            </div>
            <div className="w-full flex flex-wrap sm:flex-nowrap justify-between my-2">
                <label>Address Line 1</label>
                <input type="text" v-model="address_line1" required
                    className="rounded-sm border border-1 border-black/50 px-2 text-gray-500" />
            </div>
            <div className="w-full flex flex-wrap sm:flex-nowrap justify-between my-2">
                <label>Address Line 2</label>
                <input type="text" v-model="address_line2" required
                    className="rounded-sm border border-1 border-black/50 px-2 text-gray-500" />
            </div>
            <div className="w-full flex flex-wrap sm:flex-nowrap justify-between my-2">
                <label>Pincode</label>
                <input type="number" v-model="pincode" required
                    className="rounded-sm border border-1 border-black/50 px-2 text-gray-500" />
            </div>
            <div v-show="pincode_error" className="text-red-500 text-sm">{{ pincode_error }}</div>
            <div className="w-full flex flex-wrap sm:flex-nowrap justify-between my-2">
                <label>Mobile</label>
                <input type="number" v-model="mobile" required
                    className="rounded-sm border border-1 border-black/50 px-2 text-gray-500" />
            </div>
            <div v-show="mobile_error" className="text-red-500 text-sm">{{ mobile_error }}</div>
            <div className="w-full flex justify-center">
                <button type="submit"
                    className="rounded-sm bg-green-500 px-10 py-2 mt-10 hover:bg-green-800 hover:text-white">Submit</button>
            </div>

        </form>
    </div>
</template>

<style scoped></style>