import {AccountManager} from "../../../AccountManager";
import {adminMenuOrStay} from "./adminMenuOrStay";
import {readline} from "../../../../main";
export function changeAuthority(username,list:AccountManager,checkUsername){
    if (readline.keyInYN('Press Y for admin.Press N for employee')) {
      list.get(checkUsername).setAuthority("admin")
    } else {
        list.get(checkUsername).setAuthority("employee")
    }
    console.log(`Authority changed`)
    adminMenuOrStay(username,list,checkUsername)
}