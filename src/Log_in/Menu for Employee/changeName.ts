import {AccountManager} from "../../AccountManager";
import {menuForEmployee} from "./menuForEmployee";
import {readline} from "../../../main";

export function changeName(username,list:AccountManager){
    let newName = readline.question(`Enter new username`)
    if(list.validName(newName)) {
        list.get(username).setUsername(newName)
        console.log(`Username changed.`)
    }else console.log(`Username must be in form of an email`)
    menuForEmployee(newName,list)
}