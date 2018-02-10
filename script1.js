var app=angular.module("myModule",[]);
var myController=function($scope) {
var countries=[
    {name:"india",
    cities:[
        {name:"noida"},
        {name:"kanpur"},
        {name:"kannauj"},
        {name:"delhi"}
    ]},
    {name:"usa",
    cities:[
        {name:"noida"},
        {name:"kanpur"},
        {name:"kannauj"},
        {name:"delhi"}
    ]}
    ];
    $scope.countries=countries;

}
app.controller("myController",myController);
