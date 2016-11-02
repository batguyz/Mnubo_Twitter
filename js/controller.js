var app = angular.module('starter');


//API https://api.twitter.com/1.1/search/tweets.json?q=%24iot&src=typd


MyApp.controller('home', function ($scope) {

    $scope.login = function () {
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var secret = result.credential.secret;
            // The signed-in user info.
            var user = result.user;
            alert('logged in');
           
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }, function (error) {
            // An error happened.
        });
    }


});




//menu directive
MyApp.directive("menu", function () {
    return {
        restrict: "A",
        templateUrl: "menu.html"
    };
});