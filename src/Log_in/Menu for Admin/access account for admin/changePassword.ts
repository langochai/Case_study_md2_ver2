import {AccountManager} from "../../../AccountManager";
import {adminMenuOrStay} from "./adminMenuOrStay";
import {readline} from "../../../../main";

export function changePassword(username,list:AccountManager,checkUsername){
    let newPassword = readline.question(`Enter new password:`)
    if(list.validPassword(newPassword)) {
        list.get(checkUsername).setPassword(newPassword)
        console.log(`Password changed.`)
    }else {
        console.log(`New password must be 4 characters long with 2 letters and 2 numbers`)
    }
    adminMenuOrStay(username,list,checkUsername)
}