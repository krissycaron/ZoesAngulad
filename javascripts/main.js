console.log("hi i'm here");


var app = angular.module("ZoePie", []);
// must put this in the html body tag as a ng-app="TodoApp"

app.controller("pieList", ($scope)=>{
	$scope.pieItems =["Apple", "Cherry", "Blueberry", "Mince Meat", "Chocolate", "Chess", "Human"];

	$scope.showListView= true;

	$scope.gitPieItems= () =>{
		$scope.showListView=false;
	} 


});


// app.controller("ItemCtrl", ($scope) => {
// 	$scope.dog="Woof!";
// 	$scope.showListView = true;
// 	  $scope.items = [
//         {
//           id: 0,
//           task: "mow the lawn",
//           isCompleted: true,
//           assignedTo: "Callan",
//         },
//         {
//           id: 1,
//           task: "grade quizzes",
//           isCompleted: false,
//           assignedTo: "Lauren",
//         },
//         {
//           id: 2,
//           task: "take a nap",
//           isCompleted: false,
//           assignedTo: "Zoe",
//         }
//       ];
	



