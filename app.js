(function () {

angular.module('lunch-checker',[])

.controller('lunch_controller', function ($scope) {
$scope.message="The input tab is empty right now!!";


$scope.lunch_checkerfun = function ()
{
if($scope.lunch==null)
{
$scope.message="Empty";

}
var length=$scope.lunch.split(',').length;

if((length<=3)&&(length>=1))
  $scope.message="Enjoy!!";

  else if(length>=3)
  $scope.message="Too Much!!";

  else {
    $scope.message="Empty";
  }


}



}


)
})();
