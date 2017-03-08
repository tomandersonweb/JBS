(function (angular) {
    "use strict";
    angular.module("app",
        ["ui.bootstrap", "ngToast", "ui.select", "angular-loading-bar", "ngMask", "ui.router", "ngMessages"])
    .config(function ($locationProvider, ngToastProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(false);

        ngToastProvider.configure({
            animation: "fade", // 'fade' or 'slide'
            verticalPosition: "bottom",
            horizontalPosition: "right",
            maxNumber: 3 //limit number of visible toast messages
        });

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                component: 'home',
                data: {}
            })



            .state('branches', {
                url: '/branches',
                component: "listBranches"
            })

            .state('branches.branch', {
                url: '/Alerts',
                component: "listAlertsComponent"
            })
            .state('systemMonitoringSettings.alerts.crudAlert', {
                url: '/:id',
                component: "crudAlertComponent"
            })



    })
    .component("app",
    {
        templateUrl: config.root + "/app.html",
        controller: "appController"
    })
    .controller("appController", function () {



    });
    //add polyfill for startswith
    //if (!String.prototype.startsWith) {
    //    String.prototype.startsWith = function (searchString, position) {
    //        position = position || 0;
    //        return this.indexOf(searchString, position) === position;
    //    };
    //}

})(window.angular);
