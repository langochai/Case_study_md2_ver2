import {Employee} from "./Employee";
import {Admin} from "./Admin";

export class AccountManager {
    list: (Admin | Employee)[]

    constructor() {
        this.list = [];
    }

    showListForAnyone() {
        let list: Object[] = []
        for (let i = 0; i < this.list.length; i++) {
            let {username} = this.list[i]
            list.push({username})
        }
        console.table(list)
    }

    showListForEmployee() {
        let list: Object[] = []
        for (let i = 0; i < this.list.length; i++) {
            let {username, job} = this.list[i]
            list.push({username, job})
        }
        console.table(list)
    }

    showListForAdmin() {
        let list: Object[] = []
        for (let i = 0; i < this.list.length; i++) {
            let {username, password, authority, job, status} = this.list[i]
            list.push({username, password, authority, job, status})
        }
        console.table(list)
    }

    showListForAdminSortedByJob() {
        let list: Object[] = []
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].job == "admin") {
                let {username, password, authority, job, status} = this.list[i]
                list.push({username, password, authority, job, status})
            }
        }
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].job == "cleaning") {
                let {username, password, authority, job, status} = this.list[i]
                list.push({username, password, authority, job, status})
            }
        }
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].job == "serving customers") {
                let {username, password, authority, job, status} = this.list[i]
                list.push({username, password, authority, job, status})
            }
        }
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].job == "bouncer") {
                let {username, password, authority, job, status} = this.list[i]
                list.push({username, password, authority, job, status})
            }
        }
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].job == "waiting for new job") {
                let {username, password, authority, job, status} = this.list[i]
                list.push({username, password, authority, job, status})
            }
        }
        console.table(list)
    }

    showListForAdminSortedByStatus() {
        let list: Object[] = []
        // for (let i = 0; i < this.list.length; i++) {
        //     if (this.list[i].job == "admin") {
        //         let {username, password, authority, job, status} = this.list[i]
        //         list.push({username, password, authority, job, status})
        //     }
        // }
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].status == "done") {
                let {username, password, authority, job, status} = this.list[i]
                list.push({username, password, authority, job, status})
            }
        }
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].status == "on going") {
                let {username, password, authority, job, status} = this.list[i]
                list.push({username, password, authority, job, status})
            }
        }
        console.table(list)
    }

    validName(name: string): boolean {
        let nameRegex: RegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        return nameRegex.test(name)
    }

    validPassword(password: string): boolean {
        let passwordRegex: RegExp = /^[A-Za-z]{2}[0-9]{2}$/
        return passwordRegex.test(password)
    }

    add(account: Admin | Employee): void {
        this.list.push(account)
    }

    get(username: string): Admin | Employee {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].username == username) {
                return this.list[i]
            }
        }
    }

    delete(username: string): void {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].username == username) {
                this.list.splice(i, 1)
                break
            }
        }
    }
}