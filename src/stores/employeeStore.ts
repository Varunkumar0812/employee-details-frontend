import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useEmployeeStore = defineStore("employee", () => {
    const employees = ref([]);
    const url = import.meta.env.VITE_APP_URL;


    const headerObj = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };

    const fetchEmployees = async () => {
        console.log(localStorage.getItem("token"))
        try {
            const res = await axios.get(`${url}/employees`, headerObj);
            employees.value = res.data;
            console.log(employees.value);
        }
        catch (err) {
            console.log(err);
        }
    }

    const addEmployee = async (data: any) => {
        try {
            const res = await axios.post(`${url}/employees`, data, headerObj);
        } catch (err) {
            console.log(err);
        }
    }

    const deleteEmployee = async (id: string) => {
        try {
            const res = await axios.delete(`${url}/employee/${id}`, headerObj);
        }
        catch (err) {
            console.log(err);
        }
    }

    const updateEmployee = async (id: string, data: any) => {
        try {
            console.log(JSON.stringify(data));

            const res = await axios.patch(`${url}/employee/${id}`, data, headerObj);
            console.log(res);

        }
        catch (err) {
            console.log(err);
        }
    }

    return { employees, fetchEmployees, addEmployee, deleteEmployee, updateEmployee };
});