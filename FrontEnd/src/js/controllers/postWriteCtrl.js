postWriteCtrl.$inject = ['getArtical', 'ArticalStore', 'API', '$http', '$scope', '$stateParams', '$window']

function postWriteCtrl(getArtical, ArticalStore, API, $http, $scope, $stateParams, $window) {
    var slug = $stateParams.slug, postmethod, url
    $scope.postContent = {}
    if (slug) {
        if (!ArticalStore[slug] || !ArticalStore[slug].content) {
            var getPromise = getArtical.getPromise(slug)
            getPromise.then(
                function successCallback(data) {
                    $scope.postTitle = data.title
                    $scope.postSlug = data.slug
                    $scope.postContent.writing = data.content
                },
                function errorCallback(error) {
                    console.log(error.msg)
                })
        } else {
            $scope.postTitle = ArticalStore[slug].title
            $scope.postSlug = slug
            $scope.postContent.writing = ArticalStore[slug].content
        }
        postmethod = 'PUT'
        url = API.artical+slug
    } else {
        postmethod = 'POST'
        $scope.postTitle = ''
        $scope.postSlug = ''
        $scope.postContent.writing = ''
        url = API.articalListUrl
    }
    $scope.postSubmit = function () {
        var req = {
            method: postmethod,
            url: url,
            data: {
                title: $scope.postTitle,
                slug:  $scope.postSlug,
                content: $scope.postContent.writing,
            }
        }
        $http(req).then(
            function successCallback(response) {
                $window.location.href = '/'
            },
            function errorCallback(response) {
                console.log("error")
                console.log(response.status)
            })
    }
    $scope.setBkgColor = function (id, color) {
        document.getElementById(id).style.background = color
    }
}

exports.postWriteCtrl = postWriteCtrl
