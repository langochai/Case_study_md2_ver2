import {Admin} from "./src/Admin";
import {Employee} from "./src/Employee";
import {AccountManager} from "./src/AccountManager";
import {logIn} from "./src/Log_in/LogIn";
import {signUp} from "./src/Sign_up/SignUp";


let list = new AccountManager()
let admin = new Admin('hai','abc',list)
let employee1 = new Employee("aa@gmail.com",'aa11')
employee1.setJob("serving customers")
let employee2 = new Employee("bb@gmail.com",'bb11')
employee2.setJob("bouncer")
let employee3 = new Employee("cc@gmail.com",'cc11')
employee3.setJob("cleaning")
employee3.setStatus("done")
let employee4 = new Employee("dd@edu.vn","dd11")
list.add(admin)
list.add(employee1)
list.add(employee2)
list.add(employee3)
list.add(employee4)

export let readline = require('readline-sync');

export function main(){
    console.log(`Press a number to pick an option:`)
    let option: string[] = ["Show list of accounts", "Log in", "Create new account"]
    let index = readline.keyInSelect(option, 'Please choose:')
    switch (index){
        case 0:
            list.showListForAnyone()
            if (readline.keyInYN('Do you wanna return to main menu?\n' +
                'Press Y for main menu, press N to quit')) {
                main()
            } else {
                console.log(`Cya later!`)
            }
            break
        case 1:
            logIn(list)
            break
        case 2:
            signUp(list)
            break
        default:
            console.log(`Cya later!`)
    }
}
main()