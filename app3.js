(function () {
'use strict';
angular.module('app',[])
.controller('imageController',imageController)
.filter('custom',GetFilter);
imageController.$inject=['$scope','customFilter'];

function imageController($scope,customFilter) {

  $scope.state="1";
  $scope.mesg="HAYABUSA";

  $scope.changeVehicleName=function () {
  return  GetFilter("Get a Car");

  }
  $scope.changeImage=function () {
    $scope.state="2";

    $scope.mesg=$filter('lowercase')("LAMBO AVENTADOR");
  }

function GetFilter() {
  return function (input) {
    input= input||"";
    input= input.replace("Get","Buy");
    return input;
  }
}




    }


})()
