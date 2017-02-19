app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function ($scope, $routeParams, suggestions) {
    // controller code below
    $scope.myEntry = suggestions.myEntries[$routeParams.myEntryId];
    $scope.post = $scope.myEntry.posts[$routeParams.id];

    // add item to service
    $scope.addComment = function () {
        // if the input is empty, don't submit
        if (!$scope.body || $scope.body === "") {
            alert("Field is blank.");
            return;
        }
        // push comment to a suggestion post
        $scope.post.comments.push({
            body: $scope.body,
            likes: 0
        });
        // after submit, clear input
        $scope.body = '';
    };

    $scope.upVote = function (comment) {
        comment.likes += 1;
    };

    $scope.downVote = function (comment) {
        comment.likes -= 1;
    };

    $scope.currentEntryIndex = parseInt($routeParams.myEntryId);

}]);
