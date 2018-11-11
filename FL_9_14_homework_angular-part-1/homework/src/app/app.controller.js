app.controller('postsWallController', ['$scope', function($scope) {
    $scope.posts = wallPosts;
    $scope.user = user;
    $scope.editPost = false;

    $scope.addPost = () => {
        const title = $scope.addPost.title;
        const message = $scope.addPost.message;
        const id = $scope.posts.length;
        $scope.posts.push({
            "title":title,
            "message":message,
            "authorName":user.name,
            "authorPhoto":user.photo,
            "likes":0,
            "liked":false,
            "id":id,
        });
    };
    $scope.likes = (id) => {
        $scope.posts[id].liked ? $scope.posts[id].likes-- : $scope.posts[id].likes++;
        $scope.posts[id].liked = !$scope.posts[id].liked;
    };
    $scope.edit = (id) => {
        const title = $scope.posts[id].title;
        const message = $scope.posts[id].message;
        $scope.posts[id].title = title;
        $scope.posts[id].message = message;
    };
}]);
