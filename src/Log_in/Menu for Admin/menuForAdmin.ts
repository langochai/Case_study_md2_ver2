import {AccountManager} from "../../AccountManager";
import {main, readline} from "../../../main";
import {showListForAdmin} from "./show list for admin/showListForAdmin";
import {accessAccountForAdmin} from "./access account for admin/accessAccountForAdmin";
import {addAnAccountForAdmin} from "./add an account for admin/addAnAccountForAdmin";
export function menuForAdmin(username, list: AccountManager) {
    console.log(`*****************************************************************************************`)
    console.log(`Welcome ${username}!`)
    console.log(`Press a number to pick an option:`)
    let option: string[] = ["Access list as admin", "Access an account as admin", "Add an account"]
    let index = +readline.keyInSelect(option, 'Please choose:') + 1
    switch (index) {
        case 1:
            showListForAdmin(username, list)
            break
        case 2:
            let checkUsername = readline.question(`Enter an username:`)
            let account = list.get(checkUsername)
            if (account) {
                accessAccountForAdmin(username, list, checkUsername)
            } else {
                console.log(`Cannot find this username. Return to admin menu`)
                menuForAdmin(username, list)
            }
            break
        case 3:
            addAnAccountForAdmin(username,list)
            break
        default:
            main()
    }
}