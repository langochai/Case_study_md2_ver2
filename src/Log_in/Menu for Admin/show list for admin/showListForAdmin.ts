import {AccountManager} from "../../../AccountManager";
import {menuForAdmin} from "../menuForAdmin";
import {showListUnordered} from "./showListUnordered";
import {showListSortedByJob} from "./showListSortedByJob";
import {showListSortedByStatus} from "./showListSortedByStatus";
import {readline} from "../../../../main";

export function showListForAdmin(username,list:AccountManager){
    console.log(`Press a number to pick an option:`)
    let option: string[] = ["Show list (unordered)",
        "Show list (sorted by Job: admin -> cleaning -> serving -> bouncer -> waiting)",
        "Show list (sorted by Status)"]
    let index = readline.keyInSelect(option, 'Please choose:')
    switch (index){
        case 0:
            showListUnordered(username,list)
            break
        case 1:
            showListSortedByJob(username,list)
            break
        case 2:
            showListSortedByStatus(username,list)
            break
        default:
            // console.log(`bruh`)
            menuForAdmin(username,list)
    }
}