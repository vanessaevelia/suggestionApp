app.controller('PostsController', ['$scope', '$routeParams', 'suggestions', function ($scope, $routeParams, suggestions) {
    
    // Show more Asks from this User
    $scope.myEntries = suggestions.myEntries;

    // controller code below for posts
    $scope.myEntry = suggestions.myEntries[$routeParams.myEntryId];

    // add item to service
    $scope.addSuggestion = function () {
        // if the input is empty, don't submit
        if (!$scope.title || $scope.title === "") {
            alert("Field is blank.");
            return;
        }
        // push suggestion posts in suggestion.js
        $scope.myEntry.posts.push({
            title: $scope.title,
            likes: 0,
            comments: []
        });

        // after submit, clear input
        $scope.title = '';
    };

    $scope.upVote = function (post) {
        post.likes += 1;
    };

    $scope.downVote = function (post) {
        post.likes -= 1;
    };

    $scope.currentEntryIndex = parseInt($routeParams.myEntryId);

}]);
