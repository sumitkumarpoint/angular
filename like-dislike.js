var app=angular.module("myModule",[]);
var myController=function($scope) {
    var technologies=[

        {name:"c#",likes:0,dislikes:0},
        {name:"java",likes:0,dislikes:0},
        {name:"php",likes:0,dislikes:0},
        {name:"ruby",likes:0,dislikes:0}

    ];
    $scope.technologies=technologies;
    $scope.limit=3;
    $scope.ord='+name';

    $scope.sort=function(){
        if( $scope.ord=='+name'){
            $scope.ord='-name';
        }
        else{
            $scope.ord='+name';
        }

    }


    $scope.increaseLikes=function(technology){
        technology.likes++;
    }

    $scope.increaseDislikes=function(technology){
        technology.dislikes++;
    }

}
app.controller("myController",myController);
