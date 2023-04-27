import {Employee} from "../Employee";
import {AccountManager} from "../AccountManager";
import {main} from "../../main";

export function signUp(list:AccountManager){
    let readline = require("readline-sync")
    let newUsername = readline.question(`Enter an username:`)
    if (list.validName(newUsername)) {
        let newPassword = readline.question(`Enter password:`)
        if (list.validPassword(newPassword)) {
            let newEmployee = new Employee(newUsername,newPassword)
            list.add(newEmployee)
            console.log(`Signed up and ready to go!.`)
        } else {
            console.log(`Password must be 4 characters long with 2 letters and 2 numbers.Return to main menu`)
        }
    } else {
        console.log(`Username must be in form of an email.Return to main menu`)
    }
    main()
}