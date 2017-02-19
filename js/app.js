var app = angular.module('SuggestionBox', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "EntriesController",
            templateUrl: "views/entries.html"
        })
        .when('/home/:myEntryId', {
            controller: "PostsController",
            templateUrl: "views/posts.html"
        })
        .when('/home/:myEntryId/suggestion/:id', {
            controller: "SuggestionController",
            templateUrl: "views/suggestion.html"
        })
        .otherwise({
            redirectTo: '/'
        });
});


app.controller('MainController', ['$scope', 'suggestions', function ($scope, suggestions) {
$scope.userName = suggestions.userName; 
}]);
