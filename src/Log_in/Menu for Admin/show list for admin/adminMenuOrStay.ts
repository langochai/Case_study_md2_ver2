import {menuForAdmin} from "../menuForAdmin";
import {showListForAdmin} from "./showListForAdmin";
import {AccountManager} from "../../../AccountManager";
import {readline} from "../../../../main";

export function adminMenuOrStay(username,list:AccountManager){
    console.log(`Do you wanna go back to admin menu or return to show list for admin?`)
    if (readline.keyInYN('Press Y for admin menu.Press N to return')) {
        menuForAdmin(username,list)
    } else {
        showListForAdmin(username,list)
    }
}