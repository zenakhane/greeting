var vendaElement = document.querySelector(".Venda");
var tsongaElement = document.querySelector(".Tsonga");
var namaElement = document.querySelector(".Nama");
var greetBtn = document.querySelector(".Greet_me");
var greetme = document.querySelector(".greetme");
var name1 = document.querySelector(".name1");
var error = document.querySelector(".error");
var reset = document.querySelector(".resetBtn")
var resetBtn = document.querySelector(".reset")
var counterElement = document.querySelector(".counter")

var greetNames = Greetings();

var nameGreetNow = []

if (localStorage['greetNames']) {
    nameGreetNow = JSON.parse(localStorage.getItem('greetNames'))
    // nameGreetNow = Number(localStorage['greetNames'])
    // counterElement.innerHTML = nameGreetNow
}

greetNames.setNamesGreetedList(nameGreetNow)
counterElement.innerHTML = nameGreetNow.length

function greetMe() {
    var languageBtn = document.querySelector("input[name='langs']:checked");
    if (languageBtn && name1.value != '') {
        setTimeout(function () {
            greetme.innerHTML = ''
        }, 4000)
        var langBtn = languageBtn.value.trim();
        console.log(name1.value)

        if(greetNames.setNames(name1.value)){
            localStorage.setItem('greetNames', JSON.stringify(greetNames.getNamesList()))
            // localStorage['greetNames'] = greetNames.getNamesList().length;
        }
        greetme.innerHTML = greetNames.greetMessage(name1.value, langBtn)
        console.log(greetNames.setNameCount())
        counterElement.innerHTML = greetNames.setNameCount()

    }
    else if (name1.value == '') {
        error.innerHTML = "Oh-oh no name entered!!"
    }
    else {
        error.innerHTML = "Oh-oh you did not choose a language!"
    }
    name1.value = ''
    setTimeout(function () {
        error.innerHTML = ''
    }, 3000)

    buttons()
}
greetBtn.addEventListener('click', greetMe)


function buttons() {
    var languageBtn = document.querySelector("input[name='langs']:checked");
    languageBtn.checked = false;
}



resetBtn.addEventListener('click', function () {

    error.innerHTML = 'Reseting counter!!'

    setTimeout(function () {
        localStorage.clear()
        location.reload()
    }, 3000)


})

