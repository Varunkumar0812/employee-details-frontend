<script setup lang="ts">
import { ref, defineEmits, inject } from "vue";

const data: any = inject("sharedData", { name: "", role: "", salary: 0, pincode: 0, mobile: 0, address: "" });
console.log(data);

const emit = defineEmits(["send-data"]);

let name = ref(data.name);
let role = ref(data.role);
let salary = ref(data.salary);
let pincode = ref(data.pincode);
let mobile = ref(data.mobile);

let address_line1 = ref(data.address.split(", ")[0]);
let address_line2 = ref(data.address.split(", ").slice(1).join(", ").trim());

let name_error = ref("");
let pincode_error = ref("");
let mobile_error = ref("");

const sendData = () => {
    emit("send-data", { name, role, salary, pincode, mobile, address_line1, address_line2, name_error, pincode_error, mobile_error })
}

</script>

<template>
    <form @submit.prevent="sendData()" className="flex flex-wrap justify-center bg-white/100 p-10 text-lg">
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