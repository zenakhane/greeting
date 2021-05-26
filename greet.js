var vendaElement = document.querySelector(".Venda");
var tsongaElement = document.querySelector(".Tsonga");
var namaElement = document.querySelector(".Nama");
var greetBtn = document.querySelector(".Greet_me");
var greetme = document.querySelector(".greetme");
var name1 = document.querySelector(".name1");
var error = document.querySelector(".error");
var reset = document.querySelector(".resetBtn")

var greetNames = Greetings();

function greetMe() {
    var languageBtn = document.querySelector("input[name='langs']:checked");
    if (languageBtn && name1.value != '') {
        setTimeout(function(){
            greetme.innerHTML = ''
        }, 5000)
        var langBtn = languageBtn.value.trim();
        console.log(langBtn)
        greetNames.nameToGreet(name1.value)
        greetNames.greetMessage(langBtn)
        greetme.innerHTML = greetNames.getMessage()
       
    }
    else if (name1.value == ''){
        error.innerHTML ="Oh-oh no name entered!!"
    } else{
        error.innerHTML = "Oh-oh you did not choose a language!"
    }
    name1.value = ''
    setTimeout(function(){
        error.innerHTML = ''
    }, 3000)

    buttons()
}
function buttons(){
    var languageBtn = document.querySelector("input[name='langs']:checked");
    languageBtn.checked = false;

    
}
greetBtn.addEventListener('click', greetMe)


