
function validationService(){

    //email validation
    this.validateEmail = function(req){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.query.emailId)){
            return (true)
        }
           return (false)
    }

    //password validation

    this.validatePassword = function(req){
        //To check a password between 7 to 16 characters which contain only characters, numeric digits, underscore and 
        //first character must be a letter
        var passw=  /^[A-Za-z]\w{7,14}$/;
        if(req.query.password.match(passw)) 
        { 
            return true;
        }
            return false;
    }
}

module.exports = new validationService;