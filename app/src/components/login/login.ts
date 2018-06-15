const ap = angular.module("wc");

class loginCon implements ng.IController {
    public userName: string
    public password: string;
    private readonly loginURL = "/login"
    static $inject = ["$http", "Auth"]
    constructor(private httpService: ng.IHttpService, private Auth: IAuthService) {

    }

    public submit(): void {
        this.httpService
            .post(this.loginURL, { userName: this.userName, pass: this.password })
            .then((data) => {
                if (data)
                    this.Auth.authenticateUser(this.userName, "Tal")
            })
            .catch((err) => {
                console.log("Introder");
            });
    }


}

ap.component("login", {
    templateUrl: "./app/src/components/login/login.html",
    controller: loginCon,
    controllerAs: "vm"
})

interface IAuthService {
    authenticateUser(userName: string, token: string): void
    getUser(): string
    disconnect()
}

class AuthService implements IAuthService {
    private userName: string;
    private token: string;
    private authTime: number;

    public authenticateUser(userName: string, token: string): void {
        this.userName = userName;
        this.token = token;
        this.authTime = Date.now();
    }

    public getUser(): string {
        return this.userName;
    }

    public disconnect() {
        this.authenticateUser = null;
        this.token = null;
        this.userName = null;
    }
}

ap.service("Auth", AuthService);
