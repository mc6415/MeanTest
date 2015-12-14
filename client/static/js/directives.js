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
    
    app.directive('navBar', function(){
        return{
            restrict: 'E',
            templateUrl: '/static/templates/navbar.html'
        }
    })
    
    app.directive('registrationHome', function(){
        return{
            restrict: 'E',
            templateUrl: '/static/templates/registration-home.html'
        }
    })
    
    app.directive('footerScripts', function(){
        return{
            restrict: 'E',
            templateUrl: '/static/templates/footer-scripts.html'
        }
    })
    
    app.directive('footerColumns', function(){
        return{
            restrict: 'E',
            templateUrl: '/static/templates/footer-columns.html'
        }
    })
    
    app.directive('welcomeMessage', function(){
        return{
            restrict: 'E',
            templateUrl: '/static/templates/welcome-message.html'
        }
    })
    
    app.directive('angularControllers', function(){
        return{
            restrict: 'E',
            templateUrl: '/static/template/angular-controllers.html'
        }
    })
})();