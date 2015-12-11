(function(){
    var app = angular.module('directives', [])
    
    app.directive('registrationForm', function(){
        return{
            restrict: 'E',
            templateUrl: '/static/templates/registration-form.html'
        }
    })
    
    app.directive('dropdownMenu', function(){
        return{
            restrict: 'E',
            templateUrl: '/static/templates/dropdown-menu.html'
        }
    })
    
    app.directive('userProfile', function(){
        return{
            restrict: 'E',
            templateUrl: '/static/templates/user-profile.html'
        }
    })
})();