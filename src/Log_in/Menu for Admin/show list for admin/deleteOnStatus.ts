import {AccountManager} from "../../../AccountManager";
import {readline} from "../../../../main";
import {showListForAdmin} from "./showListForAdmin";
import {Status} from "../../../Employee";

export function deleteOnStatus(username,list:AccountManager){
    console.log(`Please choose a status:`)
    let option:string[] = ["done","on going"]
    let index = +readline.keyInSelect(option,"Please choose:") + 1
    switch (index){
        case 1:
            for (let i = 0; i < list.list.length; i++) {
                if(list.list[i].status === "done"){
                    list.list.splice(i,1)
                    i--
                }
            }
            showListForAdmin(username,list)
            break
        case 2:
            for (let i = 0; i < list.list.length; i++) {
                if(list.list[i].status=== "on going" && list.list[i].authority !== "admin"){
                    list.list.splice(i,1)
                    i--
                }
            }
            showListForAdmin(username,list)
            break
        default:
            showListForAdmin(username,list)
    }
}