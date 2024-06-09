document.getElementById("signIn").addEventListener("click" , function(){
    window.location = "./index.html"
})

var signInName = document.getElementById("signInName");
var signInEmail = document.getElementById("signInEmail");
var signInPassword = document.getElementById("signInPassword");

var infoList = [];

// infoList = JSON.parse( localStorage.getItem("InformationContainer"));
// function addInformation(){
    
// }

function signUp(){

    var validData = document.getElementById("validData");

    if(
        validationName() == true &&
        validationEmail() == true &&
        validationPassword() == true 
    ){
        var cartona;

    var info = {
        name : signInName.value,
        email : signInEmail.value,
        password : signInPassword.value
    };

    infoList.push(info);

    localStorage.setItem( "InformationContainer" , JSON.stringify(infoList));

    validData.classList.remove("d-none");

    clearForm();

    }

    
}

function validationName(){
    var text = signInName.value;
    var regex = /^[A-Z][a-z]{3,8}$/;
    var msgNameElement = document.getElementById("msgName");

    if (regex.test(text) == true){
        // console.log('match');
        msgNameElement.classList.add("d-none");
        return true;
    }
    else{
        // console.log('not match');
        msgNameElement.classList.remove("d-none");
        return false;
    }
}

function validationEmail(){
    var text = signInEmail.value;
    var regex = /.@gmail.com$/;
    var msgEmailElement = document.getElementById("msgEmail");

    if (regex.test(text) == true){
        // console.log('match');
        msgEmailElement.classList.add("d-none");
        return true;
    }
    else{
        // console.log('not match');
        msgEmailElement.classList.remove("d-none");
        return false;
    }
}


function validationPassword(){
    var text = signInPassword.value;
    var regex = /.{3,}/;
    var msgPasswordElement = document.getElementById("msgPassword");

    if (regex.test(text) == true){
        // console.log('match');
        msgPasswordElement.classList.add("d-none");
        return true;
    }
    else{
        // console.log('not match');
        msgPasswordElement.classList.remove("d-none");
        return false;
    }
}

function clearForm(){
    signInName.value = null;
    signInEmail.value = null;
    signInPassword.value = null;
}

