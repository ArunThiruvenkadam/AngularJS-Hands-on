	var app = angular.module('profile', []);

	app.controller('profileController', ['$scope', 'loginFactory', function($scope, loginFactory) {

		this.strings = {
			'name': 'Name',
			'name_required': 'Please enter the name',
			'age': 'Age',
			'age_required': 'Please enter the age',
			'phone': 'Phone',
			'phone_required': 'Please enter the phone',
			'email': 'Email',
			'email_required': 'Please enter the email',
			'address': 'Address',
			'address_required': 'Please enter the address'
		};
		
		this.profile = {
			'name': '',
			'age': '0',
			'phone': '',
			'email': '',
			'address': '',
			'image': ''
		};
		
		this.profile.image = loginFactory.profileImage;
		
		this.validateProfile = function($scope) {
			loginFactory.profileImage = this.profile.image;
            loginFactory.prepForBroadcast(this.profile.image);
            alert("Profile saved successfully");
		};
	}]);
    app.directive("fileread", [function() {
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.fileread = loadEvent.target.result;
                        });
                    }
                    reader.readAsDataURL(changeEvent.target.files[0]);
                });
            }
        }
    }]);
