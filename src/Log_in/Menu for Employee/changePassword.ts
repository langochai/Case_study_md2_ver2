import {AccountManager} from "../../AccountManager";
import {menuForEmployee} from "./menuForEmployee";
import {readline} from "../../../main";
export function changePassword(username,list:AccountManager){
    let newPassword = readline.question(`Enter new password`)
    if(list.validPassword(newPassword)) {
        list.get(username).setPassword(newPassword)
        console.log(`Password changed.`)
    }else console.log(`Password must be 4 characters long with 2 letters and 2 numbers`)
    menuForEmployee(username,list)
}