(function () {

    var module = angular.module("app");

    module.factory("branchesService", ["$http", "$q", function ($http, $q) {

        return {
            getBranches: getBranches,
            getBranch: getBranch
        };

        function getBranches() {
            return $http.get(config.baseUri + '/branches')
                .then(function (response) {
                    return response.data;
                })
                .catch(function (response) {
                    return $q.reject("Response status: " + response.status + " (" + response.statusText + ")<br /> " + response.data.message);
                });
        }

        function getBranch(id) {
            return $http.get(config.systemMonitoring.baseUri + 'api/branches/')
                .then(function (response) {
                    return response.data;
                })
                .catch(function (response) {
                    return $q.reject("Response status: " + response.status + " (" + response.statusText + ")<br /> " + response.data.message);
                });
        }


    }]);

}());