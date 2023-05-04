import {AccountManager} from "../../../AccountManager";
import {menuForAdmin} from "../menuForAdmin";
import {readline} from "../../../../main";

export function deleteAccount(username,list:AccountManager,checkUsername){
    console.log(`Do you really wanna delete this account?`)
    if (readline.keyInYN('Yes / No ?')) {
        list.delete(checkUsername)
        console.log(`Deleted. Return to admin menu.`)
    } else {
        console.log(`No change was made. Return to admin menu`)
    }
    menuForAdmin(username,list)
}