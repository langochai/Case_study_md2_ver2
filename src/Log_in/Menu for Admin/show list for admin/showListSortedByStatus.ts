import {AccountManager} from "../../../AccountManager";
import {adminMenuOrStay} from "./adminMenuOrStay";

export function showListSortedByStatus(username,list:AccountManager){
    list.showListForAdminSortedByStatus()
    adminMenuOrStay(username,list)
}