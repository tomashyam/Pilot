var homeApp = angular.module("wc");
var homeCont = /** @class */ (function () {
    function homeCont(AuthService) {
        this.AuthService = AuthService;
    }
    homeCont.$inject = ["Auth"];
    return homeCont;
}());
homeApp.component("home", {
    templateUrl: "app/src/app.html",
    controller: homeCont,
    controllerAs: "vm"
});
//# sourceMappingURL=home.js.map