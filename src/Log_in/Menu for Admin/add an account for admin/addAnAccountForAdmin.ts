import {Authority, Employee} from "../../../Employee";
import {AccountManager} from "../../../AccountManager";
import {menuForAdmin} from "../menuForAdmin";
import {Admin} from "../../../Admin";
import {readline} from "../../../../main";

export function addAnAccountForAdmin(username, list: AccountManager) {
    console.log(`Press a number to pick an authority:`)
    let authority: Authority
    let option: string[] = ["admin", "employee"]
    let index = readline.keyInSelect(option, 'Please choose:')
    switch (index) {
        case 0:
            authority = "admin"
            break
        case 1:
            authority = "employee"
            break
        default:
            menuForAdmin(username, list)
    }
    if (authority == "admin") {
        let newUsername = readline.question(`Enter an username for this admin:`)
        let newPassword = readline.question(`Enter password for this admin`)
        let newAdmin = new Admin(newUsername, newPassword, list)
        list.add(newAdmin)
        console.log(`Added a new admin.`)
    } else {
        let newUsername = readline.question(`Enter an username for this employee:`)
        if (list.validName(newUsername)) {
            let newPassword = readline.question(`Enter password for this employee`)
            if (list.validPassword(newPassword)) {
                let newEmployee = new Employee(newUsername, newPassword)
                list.add(newEmployee)
                console.log(`Added a new employee.`)
            } else {
                console.log(`Password must be 4 characters long with 2 letters and 2 numbers`)
            }
        } else {
            console.log(`Username must be in form of an email`)
        }
    }
    menuForAdmin(username, list)
}