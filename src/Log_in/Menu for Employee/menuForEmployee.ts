import {AccountManager} from "../../AccountManager";
import {main, readline} from "../../../main";
import {showListForEmployee} from "./showListForEmployee";
import {changeName} from "./changeName";
import {changePassword} from "./changePassword";
import {changeStatus} from "./changeStatus";

export function menuForEmployee(username,list:AccountManager){
    console.log(`Welcome ${username}!`)
    console.log(`Press a number to pick an option:`)
    let option: string[] = ["Show list for employee","Change name","Change password",
    "Change status"]
    let index = readline.keyInSelect(option, 'Please choose:')
    switch (index){
        case 0:
            showListForEmployee(username,list)
            break
        case 1:
            changeName(username,list)
            break
        case 2:
            changePassword(username,list)
            break
        case 3:
            changeStatus(username,list)
            break
        default:
            main()
    }
}