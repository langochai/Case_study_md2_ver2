import {AccountManager} from "../../../AccountManager";
import {menuForAdmin} from "../menuForAdmin";

export function deleteAccount(username,list:AccountManager,checkUsername){
    list.delete(checkUsername)
    console.log(`Deleted. Return to admin menu.`)
    menuForAdmin(username,list)
}