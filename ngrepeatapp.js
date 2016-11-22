(function () {

'use-strict';

  var shoppingList1=["Milk","Donuts","Chocolate","Peanut Butter","Pepto Bismal"];
  var shoppingList2=[{name:"Milk",quantity:"2"},{name:"Donuts",quantity:"4"},{name:"Peanut Butter",quantity:"100"}];

  angular.module('ShoppingListApp',[])
  .controller('ShoppingListController',ShoppingListController);
  ShoppingListController.$inject=['$scope'];
  function ShoppingListController($scope) {
    $scope.shoppingList1=shoppingList1;
    $scope.shoppingList2=shoppingList2;
    $scope.addItem= function () {

      var newItem= {name:$scope.inputItemName,quantity:"100"};
      $scope.shoppingList2.push(newItem);

    }


};




})()
