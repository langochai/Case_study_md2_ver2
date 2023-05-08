import {AccountManager} from "../../../AccountManager";
import {menuForAdmin} from "../menuForAdmin";
import {showInfo} from "./showInfo";
import {changeName} from "./changeName";
import {changePassword} from "./changePassword";
import {changeAuthority} from "./changeAuthority";
import {changeJob} from "./changeJob";
import {changeStatus} from "./changeStatus";
import {deleteAccount} from "./deleteAccount";
import {readline} from "../../../../main";

export function accessAccountForAdmin(username, list: AccountManager, checkUsername) {
    console.log(`Accessed. Please choose an option:`)
    let option: string[] = ["Show info", "Change username", "Change password", "Change authority",
        "Change job", "Change status", "Delete account"]
    let index = +readline.keyInSelect(option, 'Please choose:') + 1
    switch (index) {
        case 1:
            showInfo(username, list, checkUsername)
            break
        case 2:
            changeName(username,list,checkUsername)
            break
        case 3:
            changePassword(username,list,checkUsername)
            break
        case 4:
            changeAuthority(username,list,checkUsername)
            break
        case 5:
            changeJob(username,list,checkUsername)
            break
        case 6:
            changeStatus(username,list,checkUsername)
            break
        case 7:
            deleteAccount(username,list,checkUsername)
            break
        default:
            menuForAdmin(username, list)
    }
}