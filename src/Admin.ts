import {Employee,Authority,Job,Status} from "./Employee";
import {AccountManager} from "./AccountManager";

export class Admin extends Employee{
    list: AccountManager
    constructor(username: string, password: string,list:AccountManager) {
        super(username, password);
        this.authority = "admin"
        this.job = "admin"
        this.status = "on going"
        this.list = list
    }
    setSecretQuestion(secretQuestion: string) {
        super.setSecretQuestion(secretQuestion);
    }

    setSecretAnswer(secretAnswer: string) {
        super.setSecretAnswer(secretAnswer);
    }

    getSecretQuestion(): string {
        return super.getSecretQuestion();
    }

    getSecretAnswer(): string {
        return super.getSecretAnswer();
    }

    setUsername(username: string) {
        super.setUsername(username);
    }

    setPassword(password: string) {
        super.setPassword(password);
    }

    setAuthority(authority: Authority) {
        super.setAuthority(authority);
    }

    setJob(job: Job) {
        super.setJob(job);
    }

    setStatus(status: Status) {
        super.setStatus(status);
    }
    setList(list:AccountManager){
        this.list = list
    }

    getUsername(): string {
        return super.getUsername();
    }

    getPassword(): string {
        return super.getPassword();
    }

    getAuthority(): "admin" | "employee" {
        return super.getAuthority();
    }

    getJob(): "cleaning" | "serving customers" | "bouncer" | "waiting for new job" | "admin" {
        return super.getJob();
    }

    getStatus(): "done" | "on going" {
        return super.getStatus();
    }
    getList(){
        return this.list
    }
}