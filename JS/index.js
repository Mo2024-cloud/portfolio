// var btns = document.querySelectorAll(".btn");

// for (var i=0  ;  i<btns.length  ;  i++){

//     btns[i].addEventListener('click' , function(event){

//        alert (event.target.innerHTML) 

//     })
// }
document.getElementById("signUp").addEventListener("click" , function(){
    window.location = "./SignUp.html"
})

var signInEmail = document.getElementById("signInEmail");
var signInPassword = document.getElementById("signInPassword");

var infoList = [];

function logInBtn(){

    var InvalidData = document.getElementById("InvalidData");

    if (signInEmail.value && signInPassword.value == "".length){

        InvalidData.classList.remove("d-none");

    }
    else{
        var info = {
            email : signInEmail.value,
            password : signInPassword.value
        };
    
        infoList.push(info);
    
        localStorage.setItem( "logInContainer" , JSON.stringify(infoList));
    }

// console.log('hallo');
}