(function () {

    var module = angular.module("app", []);

    module.config(function ($locationProvider) {

        $locationProvider.html5Mode(false);

    })

})(window.angular);

(function () {

    var module = angular.module("app");

    module.component("branchesComponent", {
        templateUrl: "/app/components/branches.tpl.html",
        controllerAs: "model",
        controller: ["branchesService", controller]
    });

    function controller(branchesService) {

        var model = this;

        model.branches = [];

        model.$onInit = function () {
            model.listBranches();
        };

        model.listBranches = function () {
            branchesService.getBranches()
                .then(function (response) {
                    model.branches = response;
                })
                .catch(function (error) {
                    //ngToast.danger(error);
                });
        };

        model.getBranch = function (id) {
            branchesService.getBranch(id)
                .then(function (response) {
                    model.branches = [];
                    if (response !== 'undefined')
                        model.branches.push(response);
                })
                .catch(function (error) {
                    //ngToast.danger(error);
                });
        };

    }

}());
(function () {

    var module = angular.module("app");

    module.factory("branchesService", ["$http", "$q", function ($http, $q) {

        return {
            getBranches: getBranches,
            getBranch: getBranch
        };

        function getBranches() {
            return $http.get(config.uri.api + 'branches')
                .then(function (response) {
                    return response.data;
                })
                .catch(function (response) {
                    return $q.reject("Response status: " + response.status + " (" + response.statusText + ")<br /> " + response.data.message);
                });
        }

        function getBranch(id) {
            return $http.get(config.uri.api + 'branches/' + id)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (response) {
                    return $q.reject("Response status: " + response.status + " (" + response.statusText + ")<br /> " + response.data.message);
                });
        }


    }]);

}());