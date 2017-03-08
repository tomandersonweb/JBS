(function () {

    var module = angular.module("app");

    module.component("branchesComponent", {
        templateUrl: "branches.tpl.html",
        controllerAs: "model",
        controller: ["$rootScope", "ngToast", "branchesService", controller]
    });

    function controller($rootScope, ngToast, branchesService) {

        var model = this;

        model.branches = [];

        model.$onInit = function () {
            model.listBranches();
        };

        $rootScope.$on('onBranchesUpdate', function () {
            model.listBranches();
        });

        model.listBranches = function () {
            branchesService.getBranches()
                .then(function (response) {
                    model.branches = response;
                })
                .catch(function (error) {
                    ngToast.danger(error);
                });
        };

    }

}());