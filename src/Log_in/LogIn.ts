import {main, readline} from "../../main";
import {menuForAdmin} from "./Menu for Admin/menuForAdmin";
import {menuForEmployee} from "./Menu for Employee/menuForEmployee";

export function logIn(list){
    let username = readline.question("Please enter username here:")
    let account = list.get(username)
    if (account) {
        let password = readline.question("Please enter password here:", {hideEchoBack: true})
        if (password == account.getPassword()) {
            if (account.authority == "admin") {
                menuForAdmin(username,list)
            } else {
                menuForEmployee(username,list)
            }
        } else {
            console.log(`Wrong password. Return to main menu`)
            main()
        }
    } else {
        console.log(`Can not find username`)
        main()
    }
}