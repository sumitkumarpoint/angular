var app=angular.module("myApp",["ngRoute"]);
app.controller("controller",function($scope,$interval){
    $scope.name=1;
    $interval(function(){
        $scope.name++
        if($scope.name>=8){
            $scope.name=1;
        }
    },2000);

});

app.config(function($routeProvider){
    $routeProvider
        .when("/",{templateUrl:"home.htm"})
        .when("/login",{templateUrl:"login.htm"})
        .when("/signup",{templateUrl:"signup.htm"})
        .when("/contact",{templateUrl:"contact.htm"})
        .when("/about",{templateUrl:"about.htm"})
        .when("/forgot",{templateUrl:"forgot.htm"})

});


