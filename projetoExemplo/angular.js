var app = angular.module("app", []);

app.controller("Ctrl1", function($scope, Posts){

	init = function () {	
		Posts.get(function (posts) {
	        $scope.posts = posts.data.children;
	    });
    }();

    $scope.filterSearch = function(title){
    	post.data.title.indexof("")
    }

    $scope.favoritos = function(post){
    	return post.favorito == true
    }

    $scope.normais = function(post){
    	return post.favorito != true
    }
});

app.factory("Posts", function ($http) {
    return {
        get: function (callback) {
            $http.get("http://www.reddit.com/.json").success(callback);
        }
    }
});

app.directive("postTemplate", function () {
    return {
        restrict: "E",
        scope: {
            post: "=",
            tipo: "@"
        },
        templateUrl: 'post.html',
        controller : function($scope){
    		$scope.favoritar = function(post){
				post.favorito = true;
		    }
        }
    }
});