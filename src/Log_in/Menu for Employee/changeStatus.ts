import {AccountManager} from "../../AccountManager";
import {menuForEmployee} from "./menuForEmployee";
import {Status} from "../../Employee";
import {readline} from "../../../main";

export function changeStatus(username,list:AccountManager){
    let newStatus:Status
    console.log(`Choose an option to update your status:`)
    let option: string[] = ["done","on going"]
    let index = readline.keyInSelect(option, 'Please choose:')
    switch (index){
        case 0:
            newStatus = "done"
            list.get(username).setStatus(newStatus)
            console.log(`Status changed to "done"`)
            break
        case 1:
            newStatus = "on going"
            list.get(username).setStatus(newStatus)
            console.log(`Status changed to "on going"`)
            break
        default:
            menuForEmployee(username,list)
    }
}