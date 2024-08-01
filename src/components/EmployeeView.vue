<script setup lang="ts">
import { useRouter } from "vue-router";
import { provide, ref, type Ref } from "vue";
import router from "../router";
import axios from "axios";
import CreationForm from "./CreationForm.vue";
import { useEmployeeStore } from "@/stores/employeeStore";
import { type EmployeeData } from "@/assets/EmployeeDataInterface";

const route = useRouter();
const store = useEmployeeStore();

const editMode = ref(false);

const handleEditMode = () => {
    editMode.value = !editMode.value;
}

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
};

const employeeId = route.currentRoute.value.params.id;
const employee = (await axios.get(`http://127.0.0.1:3333/employee/${employeeId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })).data;

employee.created_at = (new Date(employee.created_at)).toLocaleString("en-US", options);
employee.updated_at = (new Date(employee.updated_at)).toLocaleString("en-US", options);


provide("sharedData", employee);

const addEmployee = async ({ name, role, salary, pincode, mobile, address_line1, address_line2, name_error, pincode_error, mobile_error }: EmployeeData) => {
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

        await store.updateEmployee(String(employeeId), data);
        router.push("/employeetable");
    }
}

</script>

<template>
    <div
        className="min-h-screen bg-gradient-to-b from-zinc-100 via-cyan-100 to-gray-50 py-10 flex flex-col justify-center items-center">
        <div className="text-center font-bold text-3xl my-10">
            Employee Details
        </div>
        <table v-show="!editMode" className="auto w-1/2 shadow-xl">
            <tr v-for="[key, value] in Object.entries(employee)">
                <td className="border-2 border-black p-2 capitalize text-lg bg-white font-bold">{{ key }}</td>
                <td className="border-2 border-black p-2 capitalize text-lg bg-white">{{ value }}
                </td>
            </tr>
        </table>
        <CreationForm v-show="editMode" @send-data="addEmployee" />
        <div>
            <button @click="handleEditMode" v-show="!editMode"
                className="py-2 px-5 bg-yellow-500 rounded-lg my-10 hover:bg-yellow-800 hover:text-white shadow-xl">
                Edit Details
            </button>
        </div>
    </div>
</template>

<style scoped></style>