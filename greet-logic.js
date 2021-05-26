
function Greetings() {
    var nameGreet = "";
    var message = "";

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
        nameGreet = name
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

