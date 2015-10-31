angular.module('CandyBrush').factory('Packages', function($http) {
    return {
        // get all the Packages
        get : function() {
            return $http.get('http://localhost:8000/api/package');
        },
        // Adding Packages
        addPackage : function(packageData) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8000/api/user/packages',
                //   headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: packageData
            });
        },
        // update packages
        updateData : function(packageData, id) {
            return $http({
                method: 'put',
                url: 'http://localhost:8000/api/user/packages/'+ id,
                //   headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: packageData
            });
        },
        // completing packages
        complete : function(id) {
            return $http({
                method: 'get',
                url: 'http://localhost:8000/api/user/packages/'+id
                //   headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
            });
        },

        // Delete Packages
        adminDeletePackage : function(id) {
            return $http({
                method: 'delete',
                url: 'http://localhost:8000/api/adminDeletePackage/'+ id
                //   headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
            });
        },
        //submit addons
        submitAddons : function(Data) {
            return $http({
                method: 'post',
                url: 'http://localhost:8000/api/addon/',
                data: Data
                //   headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
            });
        },
        // for searching packages
        searchResult : function(val) {
        return $http({
            method: 'get',
            url: 'http://localhost:8000/api/packages?query='+val
            //   headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        });
    },

        //submit bonus value
        submitBonus : function(Data) {
        return $http({
            method: 'post',
            url: 'http://localhost:8000/api/bonus',
            data: Data
            //   headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        });
    },
        assignBadge : function(user_id,badge_id) {
            return $http({
                method: 'post',
                url: 'http://localhost:8000/api/user/'+user_id+'/badge/'+badge_id
            });
        },
        nextpage : function(id) {
        return $http({
            method: 'get',
            url: 'http://localhost:8000/api/package/?orderBy=id&page='+id
        });
      }


        // destroy a Package
        /*destroy : function(id) {
         return $http.delete('http://localhost:8000/api/user/packages/' + id);
         }*/
    }

});