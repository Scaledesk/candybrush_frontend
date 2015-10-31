angular.module('CandyBrush')
// inject the Messages service into our controller
    .controller('PackageController', function(Packages, Category, $http, $scope, $location) {
        // loading variable to show the spinning loading icon
        $scope.loading = true;
        $scope.val;
        $scope.page_number = 1;
        $scope.category = Category.get();
        // get all packages
        Packages.get()
            .success(function(data) {
                $scope.packages = data;
                console.log(data);
                $scope.loading = false;
            });

        $scope.paginationCall = function()
        {
            $scope.page_number = $scope.page_number+1;
            Packages.nextpage($scope.page_number)
                .success(function(data) {
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        $scope.packages.data.push(data.data);
                    }
                });

        };
        // add package
        $scope.addPackage = function(packageData) {
            $scope.loading = true;
            Packages.addPackage(angular.toJson(packageData, 2))
                .success(function(data) {
                    // if successful
                    window.localStorage['package_id'] = data.package_id;
                    $scope.response = data;
                    $location.path('/add_package2');
                })
                .error(function(data) {
                    console.log(data);
                    $scope.response = data;
                });
        };
        // update package
        $scope.updatePackage2 = function(packageData) {
            $scope.loading = true;
            var id = window.localStorage['package_id'];
            Packages.updateData(angular.toJson(packageData, 2), id)
                .success(function(data) {
                    // if successful
                    $scope.response = data;
                    $location.path('/add_package3');
                })
                .error(function(data) {
                    console.log(data);
                    $scope.response = data;
                });
        };
        // update packages 2
        $scope.updatePackage3 = function(packageData) {
            $scope.loading = true;
            var id = window.localStorage['package_id'];
            Packages.updateData(angular.toJson(packageData, 2), id)
                .success(function(data) {
                    // if successful
                    $scope.response = data;
                    $location.path('/add_addons');
                })
                .error(function(data) {
                    console.log(data);
                    $scope.response = data;
                });
        };

        // admin delete packages
        $scope.deletePackage = function(p){
            Packages.adminDeletePackage(p)
                .success(function(res) {
                    // if successful
                    console.log(res);
                    $scope.response = res;
                    Packages.get()
                        .success(function(data) {
                            $scope.packages = data;
                        });
                })
                .error(function(data) {
                    console.log(data);
                    $scope.response = data;
                });

        }

        // submit Bonus
        $scope.submitBonus = function(bonusData) {
            $scope.loading = true;
            Packages.submitBonus(angular.toJson(bonusData, 2))
                .success(function(data) {
                    // if successful
                    $scope.response = data;
                })
                .error(function(data) {
                    console.log(data);
                    $scope.response = data;
                });
        };

        // function for submit addons
        $scope.submitAddons = function(addonsData) {
            $scope.loading = true;
            Packages.submitAddons(angular.toJson(addonsData, 2))
                .success(function(data) {
                    // if successf0ul
                    $scope.response = data;
                })
                .error(function(data) {
                    console.log(data);
                    $scope.response = data;
                });
        };
        $scope.searchPackage = function(){
            $scope.loading = true;
            Packages.searchResult($scope.val)
                .success(function(data) {
                    // if successf0ul
                    $scope.packages = data;
                    console.log(data);
                 //   $scope.response = data;
                })
                .error(function(data) {
                    console.log(data);
                    $scope.response = data;
                });
        };


    });