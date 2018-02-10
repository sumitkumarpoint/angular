var app=angular.module("myModule",[]);
var myCon=function($scope) {
    var img={name: "desert", path: "./Desert.jpg"};
    $scope.image =img;

}
app.controller("myController",myCon);
