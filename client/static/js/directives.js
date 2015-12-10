(function(){
    var app = angular.module('directives', [])
    
    app.directive('registrationForm', function(){
        return{
            restrict: 'E',
            templateUrl: '/static/templates/registration-form.html'
        }
    })
})();