import {AccountManager} from "../../../AccountManager";
import {menuForAdmin} from "../menuForAdmin";
import {accessAccountForAdmin} from "./accessAccountForAdmin";
import {readline} from "../../../../main";

export function adminMenuOrStay(username,list:AccountManager,checkUsername){
    console.log(`Do you wanna go back to admin menu or return to account access as admin?`)
    if (readline.keyInYN('Press Y for admin menu.Press N to return')) {
        menuForAdmin(username,list)
    } else {
        accessAccountForAdmin(username,list,checkUsername)
    }
}