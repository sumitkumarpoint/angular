var app=angular
    .module("pp",[])
    .controller("myController",function($scope,string){
        $scope.toChange=function (input) {

           $scope.output=string.result(input);
        }

    })