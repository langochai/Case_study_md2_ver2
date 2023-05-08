import {AccountManager} from "../../../AccountManager";
import {menuForAdmin} from "../menuForAdmin";
import {showListUnordered} from "./showListUnordered";
import {showListSortedByJob} from "./showListSortedByJob";
import {showListSortedByStatus} from "./showListSortedByStatus";
import {readline} from "../../../../main";
import {deleteOnStatus} from "./deleteOnStatus";

export function showListForAdmin(username,list:AccountManager){
    console.log(`Press a number to pick an option:`)
    let option: string[] = ["Show list (unordered)",
        "Show list (sorted by Job: admin -> cleaning -> serving -> bouncer -> waiting)",
        "Show list (sorted by Status)",
        "Delete based on status"]
    let index = +readline.keyInSelect(option, 'Please choose:') + 1
    switch (index){
        case 1:
            showListUnordered(username,list)
            break
        case 2:
            showListSortedByJob(username,list)
            break
        case 3:
            showListSortedByStatus(username,list)
            break
        case 4:
            deleteOnStatus(username,list)
            break
        default:
            // console.log(`bruh`)
            menuForAdmin(username,list)
    }
}