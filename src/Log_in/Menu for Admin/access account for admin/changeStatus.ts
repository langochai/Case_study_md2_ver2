import {AccountManager} from "../../../AccountManager";
import {Status} from "../../../Employee";
import {accessAccountForAdmin} from "./accessAccountForAdmin";
import {adminMenuOrStay} from "./adminMenuOrStay";
import {readline} from "../../../../main";

export function changeStatus(username,list:AccountManager,checkUsername){
    let newStatus:Status
    let option: string[] = ["done","on going"]
    let index = readline.keyInSelect(option, 'Please choose:')
    switch (index){
        case 0:
            newStatus = "done"
            break
        case 1:
            newStatus = "on going"
            break
        default:
            accessAccountForAdmin(username,list,checkUsername)
    }
    let account = list.get(checkUsername)
    if(account.authority=="admin"){
        console.log("Cannot assign job to an admin! He's da boss!")
    } else {
        account.setStatus(newStatus)
        console.log(`Status changed.`)
    }
    adminMenuOrStay(username,list,checkUsername)
}