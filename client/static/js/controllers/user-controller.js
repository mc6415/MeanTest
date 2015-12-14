app.controller('UserController', ['$cookies', '$resource', function ($cookies, $resource) {
    var self = this;
    self.User = $resource('/api/user/:id')

    if ($cookies.get('uid') != null) {
        self.User.get({id : $cookies.get('uid')}, function(result){
            self.account = result;
            $('dropdown-menu').css("display", "inline-block")
            $('#regForm').css("display", "none");
        })
        $('#chartDiv').fadeIn();
    }
    
    self.date = new Date()
    
    self.showProfile = function(){
        $('.jumbotron').slideUp()
        $('#userProfileContainer').fadeIn()
    }
    
    self.hideProfile = function(){
        $('#userProfileContainer').slideUp()
        $('.jumbotron').fadeIn()
    }
}])