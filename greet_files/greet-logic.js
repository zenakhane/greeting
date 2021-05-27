
function Greetings() {
    // var nameGreet = "";
    //var message = "";
    var namesGreetedList = []  


    function greetMessage(name, lang) {
        if (lang === "Venda") {
            return "Ndaa, " + name;

        }
        else if (lang === "Tsonga") {
            return "Ahee, " + name;

        }
        else if (lang === "Nama") {
            return "Halau, " + name;

        }

    }

function setNames(name){
    console.log(name + "sdsdsd")
    if(!namesGreetedList.includes(name)){
       namesGreetedList.push(name)
    }
   
}
function setNameCount(){
    console.log(namesGreetedList)
    return namesGreetedList.length;

}

function getNamesList(){
    return namesGreetedList
}

    return {
        greetMessage,
        getNamesList,
        setNames,
        setNameCount

    }

}

