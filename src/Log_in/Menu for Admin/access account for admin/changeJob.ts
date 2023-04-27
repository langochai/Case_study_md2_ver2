import {AccountManager} from "../../../AccountManager";
import {Job} from "../../../Employee";
import {accessAccountForAdmin} from "./accessAccountForAdmin";
import {adminMenuOrStay} from "./adminMenuOrStay";
import {readline} from "../../../../main";

export function changeJob(username,list:AccountManager,checkUsername){
    let newJob:Job
    let option: string[] = ["cleaning" , "serving customers" , "bouncer" , "waiting for new job"]
    let index = readline.keyInSelect(option, 'Please choose:')
    switch (index){
        case 0:
            newJob = "cleaning"
            break
        case 1:
            newJob = "serving customers"
            break
        case 2:
            newJob = "bouncer"
            break
        case 3:
            newJob = "waiting for new job"
            break
        default:
            accessAccountForAdmin(username,list,checkUsername)
    }
    let account = list.get(checkUsername)
    if(account.authority=="admin"){
        console.log("Cannot assign job to an admin! He's da boss!")
    } else {
        account.setJob(newJob)
        console.log(`Job changed.`)
    }
    adminMenuOrStay(username,list,checkUsername)
}