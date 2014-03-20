var app = angular.module("app", []);

app.controller("Ctrl1", function($scope, Posts){

	init = function () {
		$scope.posts = [];
		$scope.favoritos = [];

		Posts.get(function (posts) {
	        $scope.posts = posts.data.children;
	    });
    }();

	$scope.addFavoritos = function (post) {
		$scope.favoritos.unshift(post);
		
		var index = $scope.posts.indexOf(post);
		$scope.posts.splice(index, 1);

	};

	$scope.removeFavoritos = function (post) {
		$scope.posts.unshift(post);
		
		var index = $scope.favoritos.indexOf(post);
		$scope.favoritos.splice(index, 1);
	};
});

app.factory("Posts", function ($http) {
    return {
        get: function (callback) {
            $http.get("http://www.reddit.com/.json").success(callback);
        }
    }
});

// posts.directive("postTemplate", function () {
//     return {
//         restrict: "E",
//         scope: {
//             post: "="
//         },
//         templateUrl: '/post.html'
//     }
// });