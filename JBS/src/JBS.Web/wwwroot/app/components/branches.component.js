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