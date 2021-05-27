
function Greetings() {
    var nameGreet = "";
    var message = "";
    var counter = 0
    var namesGreeted = []  


    function greetMessage(name) {
        if (name === "Venda") {
            message = "Ndaa, " + nameGreet;

        }
        else if (name === "Tsonga") {
            message = "Ahee, " + nameGreet;

        }
        else if (name === "Nama") {
            message = "Halau, " + nameGreet;

        }

    }

    function nameToGreet(name) {
        if(namesGreeted.length ==0){
            namesGreeted.push(name)
        }else {
            for(var i =0; i < namesGreeted.length; i++) {
                if (namesGreeted[i] == name){
                    
                }
            }
        }
        nameGreet = name;
    }

    function getMessage() {
        return message
    }

    return {
        greetMessage,
        getMessage,
        nameToGreet

    }

}

