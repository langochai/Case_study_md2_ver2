import {AccountManager} from "../../../AccountManager";
import {adminMenuOrStay} from "./adminMenuOrStay";

export function showInfo(username,list:AccountManager,checkUsername){
    console.table(list.get(checkUsername))
    adminMenuOrStay(username,list,checkUsername)
}