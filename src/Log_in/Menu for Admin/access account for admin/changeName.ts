import {AccountManager} from "../../../AccountManager";
import {menuForAdmin} from "../menuForAdmin";
import {accessAccountForAdmin} from "./accessAccountForAdmin";
import {readline} from "../../../../main";

export function changeName(username,list:AccountManager,checkUsername){
    let newUsername = readline.question(`Enter new username:`)
    if(list.validName(newUsername)) {
        list.get(checkUsername).setUsername(newUsername)
        console.log(`Username changed.`)
        menuForAdmin(username,list)
    }else {
        console.log(`New username must be a from of an email`)
        accessAccountForAdmin(username,list,checkUsername)
    }
}