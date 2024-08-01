<script setup lang="ts">
import router from "../router";
import CreationForm from "@/components/CreationForm.vue";
import { useEmployeeStore } from '@/stores/employeeStore';
import { type EmployeeData } from '@/assets/EmployeeDataInterface';

const store = useEmployeeStore();

const addEmployee = async ({ name, role, salary, address, pincode, mobile, address_line1, address_line2, name_error, pincode_error, mobile_error }: EmployeeData) => {
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

        await store.addEmployee([data]);

        router.push("/employeetable");
    }
}

</script>

<template>
    <div className="flex justify-center flex-wrap py-10 bg-gradient-to-b from-sky-400 to-cyan-400 min-h-screen">
        <div className="w-full text-center text-4xl font-semibold font-poppins">Create New Employee</div>
        <CreationForm @send-data="addEmployee" />
    </div>
</template>

<style scoped></style>