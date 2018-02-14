var app=angular
    .module("myApp",[])
    .controller("myController",function($scope,$location,$anchorScroll){
     $scope.scroll=function (input) {
         $location.hash(input);
         $anchorScroll.yOffset=50;
         $anchorScroll();


     }
        $scope.show=true;
     $scope.myFun=function(){
         $scope.show=!$scope.show;
        }

    })