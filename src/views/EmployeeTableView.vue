<script setup lang="ts">
import router from "../router";
import { ref, watchEffect, watch, computed } from "vue";
import "primeicons/primeicons.css"
import { useEmployeeStore } from "@/stores/employeeStore";
import CreationForm from "@/components/CreationForm.vue";
import { type EmployeeData } from '@/assets/EmployeeDataInterface';


const store = useEmployeeStore();
const isDialog = ref(false);

watchEffect(async () => {
    try {
        await store.fetchEmployees();
    }
    catch (err) {
        console.log(err);
    }
});

watch(isDialog, async () => {
    try {
        await store.fetchEmployees();
    }
    catch (err) {
        console.log(err);
    }
})

const employees = computed(() => (store.employees));
const deleteMode = ref(false);

const handleDelete = async (id: string) => {
    await store.deleteEmployee(id);
    window.location.reload();
}

const handleDetails = (id: string) => {
    router.push(`/employee/${id}`);
}

const logOut = () => {
    localStorage.clear();
    router.push("/");
}

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

        isDialog.value = false;
        router.push("/employeetable");
    }
}

</script>

<template>
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-cyan-100 py-10 ">
        <div
            className="w-full flex flex-wrap lg:flex-nowrap justify-center items-center text-sm lg:text-3xl my-10 font-semibold">
            <v-btn color="black" class="capitalize" @click="logOut()">Log Out</v-btn>
            <v-btn variant="tonal" color="orange" @click="router.push('/')" class="mx-10 capitalize">
                Go Back
            </v-btn>
            Total number of Employees : {{ employees.length }}
            <div className="font-normal flex flex-wrap items-center lg:flex-nowrap">
                <v-dialog v-model="isDialog" class="w-1/2" transition="dialog-top-transition">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn color="green" v-bind="activatorProps" class="mx-5 capitalize">
                            Add New Employee
                        </v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <div class="w-full p-2 bg-white rounded-md shadow-xl">
                            <div class="font-semibold text-3xl text-center p-4 bg-white">Add New
                                Employee</div>
                            <CreationForm @send-data="addEmployee" />
                        </div>
                    </template>
                </v-dialog>
            </div>
        </div>
        <div className="w-full px-4 sm:px-20">
            <table className="w-full table-fixed lg:table-auto bg-white shadow-2xl">
                <tr className="font-bold text-sm sm:text-lg bg-slate-300">
                    <td v-for="x in Object.keys(employees[0])">{{ x.toUpperCase() }}
                    </td>
                    <td>MORE DETAILS</td>
                    <td>DELETE</td>
                </tr>
                <tr v-for="x in employees">
                    <td v-for="y in x">{{ y }}</td>
                    <td>
                        <v-btn variant="tonal" color="purple" @click="handleDetails(x['id'])" class="capitalize">
                            More Details
                        </v-btn>
                    </td>
                    <td>
                        <v-btn variant="flat" color="red" @click="handleDelete(x['id'])" class="capitalize">
                            <i class="pi pi-trash"></i>
                        </v-btn>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
td {
    border: solid 1px black;
    padding: 10px;
}
</style>
