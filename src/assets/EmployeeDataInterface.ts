import { type Ref } from "vue";

export interface EmployeeData {
    name: Ref,
    role: Ref,
    address: Ref,
    salary: Ref,
    pincode: Ref,
    mobile: Ref,
    address_line1: Ref,
    address_line2: Ref,
    name_error: Ref,
    pincode_error: Ref,
    mobile_error: Ref
}

export interface UserData {
    username: string,
    password: string,
    email: string
}
