var app=angular.module("myApp",["ngRoute","ngStorage"]);
app.controller("controller",function($scope,$interval,$localStorage){



    $scope.fname="";
    $scope.lname="";
    $scope.em="";
    $scope.ps="";
    $scope.email="";
    $scope.pass="";
    $scope.save=function() {
        $localStorage.message={
            "fname":$scope.fname,
            "lname":$scope.lname,
            "email":$scope.em,
            "pass":$scope.ps};


    }
    $scope.fn=$localStorage.message.fname;
    $scope.ln=$localStorage.message.lname;
    $scope.e=$localStorage.message.email;
    $scope.p=$localStorage.message.pass;
$scope.page="";

    $scope.get=function() {


        if($localStorage.message.email==$scope.email && $localStorage.message.pass==$scope.pass){

            alert("successfully login");
            $scope.page="#!/about";
        }
        else {
            alert("enter correct user name password");
        }
    }









    $scope.name=1;
    $interval(function(){
        $scope.name++
        if($scope.name>=8){
            $scope.name=1;
        }
    },2000);






    $scope.lsubmitted = false;
    $scope.ssubmitted = false;
    $scope.fsubmitted = false;
    $scope.sSubmit=function(){

        $scope.ssubmitted = true;
    };
    $scope.fSubmit=function(){

        $scope.fsubmitted = true;

    };
    $scope.lSubmit=function(){

        $scope.lsubmitted = true;

    };

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



