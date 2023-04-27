import {AccountManager} from "../../../AccountManager";
import {adminMenuOrStay} from "./adminMenuOrStay";

export function showListUnordered(username,list:AccountManager){
    list.showListForAdmin()
    adminMenuOrStay(username,list)
}