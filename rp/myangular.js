var app=angular.module("myApp",["ngRoute"])
app.config(function($routeProvider){
    $routeProvider
        .when("/",{templateUrl:"home.htm"})
        .when("/login",{templateUrl:"login.htm"})
        .when("/signup",{templateUrl:"signup.htm"})
        .when("/contact",{templateUrl:"contact.htm"})
        .when("/about",{templateUrl:"about.htm"})
        .when("/forgot",{templateUrl:"forgot.htm"})

});



app.controller("controller",function($scope){

    })