import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useEmployeeStore = defineStore("employee", () => {
    const employees = ref([]);

    const fetchEmployees = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5000/employees");
            employees.value = res.data;
            console.log(employees.value);
        }
        catch (err) {
            console.log(err);
        }
    }

    const addEmployee = async (data: any) => {
        try {
            const res = await axios.post("http://127.0.0.1:5000/employees", JSON.stringify(data));
        } catch (err) {
            console.log(err);
        }
    }

    const deleteEmployee = async (id: string) => {
        try {
            const res = await axios.delete(`http://127.0.0.1:5000/employees/${id}`);
        }
        catch (err) {
            console.log(err);
        }
    }

    const updateEmployee = async (id: string, data: any) => {
        try {
            const res = await axios.patch(`http://127.0.0.1:5000/employees/${id}`, JSON.stringify(data));
        }
        catch (err) {
            console.log(err);
        }
    }

    return { employees, fetchEmployees, addEmployee, deleteEmployee, updateEmployee };
});