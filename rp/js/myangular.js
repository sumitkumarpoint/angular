var app=angular.module("myApp",["ngRoute","ngStorage"]);
app.controller("controller",function($scope,$interval,$localStorage) {


    $scope.fname = "";
    $scope.lname = "";
    $scope.em = "";
    $scope.ps = "";
    $scope.save = function () {
        if($localStorage.message.status==true){
            alert("click on log out first");
        }
        else {
            alert("Successfully Sign up");
            $localStorage.message = {
                "fname": $scope.fname,
                "lname": $scope.lname,
                "email": $scope.em,
                "pass": $scope.ps,
                "status": true

            };
        }

    }
    $scope.fn = $localStorage.message.fname;
    $scope.ln = $localStorage.message.lname;
    $scope.e = $localStorage.message.email;
    $scope.p = $localStorage.message.pass;
    $scope.page = "";

    $localStorage.status=false;
    $scope.get=function() {
        if($localStorage.message.status==true){
            alert("click on log out first");
        }
        else {
            if ($localStorage.message.email == $scope.email && $localStorage.message.pass == $scope.pass) {

                $localStorage.message.status = true;
                alert("successfully log in");
                $scope.page = "about.htm";
            }
            else {
                alert($localStorage.status);
            }
        }
    }
$scope.statu= $localStorage.message.status;

$scope.logout=function(){
    $localStorage.message.status=false;
}



    $scope.forget=function() {
        if($localStorage.message.status==true){
            alert("Click on log out First");
        }
        else {
            if ($localStorage.message.email == $scope.ema && $localStorage.message.fname == $scope.f_name && $localStorage.message.lname == $scope.l_name   ) {

                alert("Your password is:   "+$localStorage.message.pass);
            }
            else {
                alert("Enter Your Correct Details");
                alert("Enter Your Correct Details");
            }
        }
    }




    $scope.name=1;
    $interval(function(){
        $scope.name++;
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



