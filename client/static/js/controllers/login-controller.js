app.controller('LoginController', ['$resource', '$cookies', function ($resource, $cookies) {
    var self = this;
    var Login = $resource('/api/login')

    $(document).ready(function () {
        if ($cookies.get('uid') != undefined) {
            $('#loginForm a').css("display", "inline-block")
            $('#loginForm input').css("display", "none");
            $('#loginForm button').css("display", "none");
            $('registration-form').css("display", "none");
        }
    })
    
    self.login = function () {
        var login = new Login();
        login.emailAddress = self.emailAddress;
        var hash = CryptoJS.SHA3(self.password);
        login.password = hash.toString(CryptoJS.enc.Base64);
        Login.save(login, function (result) {
            if (result.result === "Failure") {
                self.reason = result.reason;
                $('#loginFail').slideDown();
            } else {
                $cookies.put('uid', result.uid)
                location.reload()
            }
        });
    }

    self.logout = function () {
        $cookies.remove('uid')
        location.reload()
    }
}])