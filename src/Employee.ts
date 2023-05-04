export type Authority = "admin" | "employee"
export type Job = "cleaning" | "serving customers" | "bouncer" | "waiting for new job" |"admin"
export type Status = "done" | "on going"
export interface IEmployee {
    username:string;
    password:string;
    authority:Authority;
    job:Job;
    status:Status;
}

export class Employee  implements IEmployee{
    username: string;
    password: string;
    authority : Authority;
    job : Job;
    status: Status;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this.authority = "employee";
        this.job = "waiting for new job";
        this.status = "on going";
    }
    setUsername(username:string){
        this.username = username
    }
    setPassword(password:string){
        this.password = password
    }
    setAuthority(authority:Authority){
        this.authority = authority
    }
    setJob(job:Job){
        this.job = job
    }
    setStatus(status:Status){
        this.status = status
    }
    getUsername(){
        return this.username
    }
    getPassword(){
        return this.password
    }
    getAuthority(){
        return this.authority
    }
    getJob(){
        return this.job
    }
    getStatus(){
        return this.status
    }
}