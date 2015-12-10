app.controller('RegistrationController', ['$resource', function ($resource) {
    var self = this;
    var Register = $resource('/api/register')
    
    self.title = "Testing testing 1,2,3"
    
    self.test = function(){
        return true
    }
    
    self.registerUser = function(){
        var person = {
            firstName:          self.firstName,
            lastName:           self.lastName,
            emailAddress:       self.emailAddress,
            password:           CryptoJS.SHA3(self.password).toString(CryptoJS.enc.Base64),
            confirmPassword:    CryptoJS.SHA3(self.confirmPassword).toString(CryptoJS.enc.Base64)
        }
        
        if (person.password != person.confirmPassword){
            $('#confirmGroup').addClass('has-error')
            self.errorMessage = "Passwords do not match"
            $('#errorPanel').slideDown();
        } else {
            Register.save(person , function(result){
                if(result.code == 11000){
                    self.errorMessage = "Email address already in use!";
                    $('#errorPanel').slideDown();
                } else {
                    self.registered = result
                    $('#registrationForm').slideUp();
                    $('#registerSuccess').slideDown();
                }
            });
        }
    }
}])
