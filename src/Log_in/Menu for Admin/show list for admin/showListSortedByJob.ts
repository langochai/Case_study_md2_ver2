import {AccountManager} from "../../../AccountManager";
import {adminMenuOrStay} from "./adminMenuOrStay";

export function showListSortedByJob (username,list:AccountManager){
    list.showListForAdminSortedByJob()
    adminMenuOrStay(username,list)
}