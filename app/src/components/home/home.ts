const homeApp = angular.module("wc");

class homeCont implements ng.IController {

    static $inject = ["Auth"]
    constructor(private AuthService) {

    }
}

homeApp.component("home", {
    templateUrl: "app/src/app.html",
    controller: homeCont,
    controllerAs: "vm"
});