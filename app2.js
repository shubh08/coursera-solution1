(function () {

  angular.module('app',[])
  .filter('getFilter',function ($scope) {

    return function (input) {
      input=input||"";
      input=input.replace("Get","Buy");
      return input;
    }
  })
  .controller('imageController',function ($scope) {
$scope.text="Get a Car";
$scope.state=1;
$scope.mesg="HAYABUSA 1500 CC";
$scope.changeImage=function () {

$scope.state=2;
$scope.mesg="LAMBO AVENTADOR";
}
 function changeTextFilter() {

   return function (input){

     input=input || "";
     input=input.replace("Get","Buy");
     return input;

   }


 }



  })

})();
