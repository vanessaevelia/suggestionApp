app.controller('EntriesController', ['$scope', 'suggestions', function ($scope, suggestions) {
    // controller code below for posts
    $scope.myEntries = suggestions.myEntries;
    
    // add item to service
    $scope.addEntry = function () {
        // if the input is empty, don't submit
        if (!$scope.subject || $scope.subject === "") {
            alert("Field is blank.");
            return;
        }
        // push new entry in suggestion.js
        $scope.myEntries.push({
            subject: $scope.subject,
            category: $scope.category,
            desc: $scope.desc,
            posts: []
        });

        // after submit, clear input
        $scope.subject = '';
        $scope.category = '';
        $scope.desc = '';
    };

    $scope.removeEntry = function (index) {
        $scope.myEntries.splice(index, 1);
    };
    
}]);
