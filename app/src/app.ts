const app = angular.module("wc", ["ngRoute", "ngMaterial", "ngMessages"])
    .config(($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider
            .when("/basic", {
                template: `<basic></basic>`
            }).when("/score", {
                template: `<score></score>`
            }).when("/updates", {
                template: `<updates></updates>`
            }).otherwise("basic");
    })


// Components statments.


app.component("basic", {
    template: `<h3>basic data, similiar to home (maybe ridandent)</h3>`
});
app.component("score", {
    template: `<h3>here we will display my score, how it was calculated</h3>`
});
app.component("updates", {
    template: `<h3>Some updates from the world</h3>`
});

