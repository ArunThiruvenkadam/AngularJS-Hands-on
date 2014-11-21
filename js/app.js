	var app = angular.module('app',['menu', 'feeds', 'profile']);

	app.factory('loginFactory',function ($rootScope){
        var factory = {};

        factory.username= "";
        factory.password= "";
        factory.profileImage= "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDaTBcJvo9Qh6TdpF-W6GT8N25W8RInPH2hB5xDptlJlaAIfWZ";

        factory.prepForBroadcast = function(profileImage) {
            this.profileImage = profileImage;
            this.broadcastItem(profileImage);

        };

        factory.broadcastItem = function(profileImage) {
            $rootScope.$broadcast('handleBroadcast', profileImage);
        };
        return factory;
		}
	);
    app.controller('loginController',function($scope,$rootScope,loginFactory){
		
		$scope.model = loginFactory;
		$scope.validLogin = false;
		$scope.islogin = false;
		$scope.isFeed = false;
		$scope.isProfile = false;

		$scope.screens = [{'name':'screen1','url':'views/login.html'},{'name':'screen2','url':'views/feed.html'}];
		$rootScope.screen = $scope.screens[0];

		$scope.validateLogin = function() {
			if ($scope.model.username && $scope.model.password) {
				if($scope.model.username === 'arun' && $scope.model.password === "ofs") {
					$scope.validLogin = true;
					$scope.islogin = true;
					$scope.validationError ="";
					$rootScope.screen = $scope.screens[1];
				} else {
					$scope.validationError = "Invalid Username/password.";
				}
			} else {
                if(!$scope.model.username && !$scope.model.password) {
                    $scope.validationError = "Please enter Username and password.";
                } else if(!$scope.model.username) {
				    $scope.validationError = "Please enter Username";
                } else if(!$scope.model.password) {
                    $scope.validationError = "Please enter password.";
                }
			}
            /*// to clear the username and password
            $scope.model.username = "";
            $scope.model.password = "";*/
		};
		
		$scope.logout = function() {
			$scope.islogin = false;
			$rootScope.screen = $scope.screens[0];
			$scope.model = loginFactory;
		};
	
	});





