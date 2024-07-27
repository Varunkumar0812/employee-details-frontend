<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { defineProps } from "vue";


const props = defineProps({
    name: String,
    role: String,
    salary: Number,
    pincode: Number,
    mobile: Number,
    address_line1: String,
    address_line2: String,
});

const emit = defineEmits(["send-data"]);

let name = ref(props.name || "");
let role = ref(props.role || "");
let salary = ref(props.salary || 0);
let pincode = ref(props.pincode || 0);
let mobile = ref(props.mobile || 0);

let address_line1 = ref(props.address_line1 || "");
let address_line2 = ref(props.address_line2 || "");

let name_error = ref("");
let pincode_error = ref("");
let mobile_error = ref("");

const sendData = () => {
    emit("send-data", { name, role, salary, pincode, mobile, address_line1, address_line2, name_error, pincode_error, mobile_error })
}

</script>

<template>
    <form @submit.prevent="sendData()"
        className="w-4/5 lg:w-1/3 flex flex-wrap justify-center bg-white/100 p-10 my-10 text-lg rounded-xl shadow-2xl">
        <div className="w-full flex flex-wrap sm:flex-nowrap justify-between my-2">
            <label>Name of employee</label>
            <input type="text" v-model="name" required maxlength="50"
                className="rounded-sm border border-1 border-black/50 px-2 text-gray-500" default="James Howlett" />
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
</template>

<style scoped></style>