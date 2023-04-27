import {AccountManager} from "../../AccountManager";
import {menuForEmployee} from "./menuForEmployee";

export function showListForEmployee(username,list:AccountManager){
    list.showListForEmployee()
    console.log(`List showed. Return to employee menu`)
    menuForEmployee(username,list)
}