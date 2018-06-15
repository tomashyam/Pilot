var ap = angular.module("wc");
var loginCon = /** @class */ (function () {
    function loginCon(httpService, Auth) {
        this.httpService = httpService;
        this.Auth = Auth;
        this.loginURL = "/login";
    }
    loginCon.prototype.submit = function () {
        var _this = this;
        this.httpService
            .post(this.loginURL, { userName: this.userName, pass: this.password })
            .then(function (data) {
            if (data)
                _this.Auth.authenticateUser(_this.userName, "Tal");
        })
            .catch(function (err) {
            console.log("Introder");
        });
    };
    loginCon.$inject = ["$http", "Auth"];
    return loginCon;
}());
ap.component("login", {
    templateUrl: "./app/src/components/login/login.html",
    controller: loginCon,
    controllerAs: "vm"
});
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.authenticateUser = function (userName, token) {
        this.userName = userName;
        this.token = token;
        this.authTime = Date.now();
    };
    AuthService.prototype.getUser = function () {
        return this.userName;
    };
    AuthService.prototype.disconnect = function () {
        this.authenticateUser = null;
        this.token = null;
        this.userName = null;
    };
    return AuthService;
}());
ap.service("Auth", AuthService);
//# sourceMappingURL=login.js.map