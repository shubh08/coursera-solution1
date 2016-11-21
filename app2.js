(function () {

  angular.module('app',[])
  .controller('imageController',function ($scope) {

$scope.state=1;
$scope.mesg="HAYABUSA 1500 CC";
$scope.changeImage=function () {

$scope.state=2;
$scope.mesg="LAMBO AVENTADOR";
}
 function chanegTextFilter() {

   return function (input){

     input=input || "";
     input=input.replace("Get","Buy");
     return input;

   }


 }



  })

})();
