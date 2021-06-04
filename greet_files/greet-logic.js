
function Greetings() {
    var namesGreetedList = []
    var nameGreetNow = 0



    function greetMessage(name, lang) {
        
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

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
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if(!namesGreetedList.includes(name)){
        nameGreetNow++
       namesGreetedList.push(name)
       return true
    }
   
}
function setNameCount(){
    return namesGreetedList.length;
}

function setNamesGreetedList(name){
    namesGreetedList = name
}

function getNamesList(){
    return namesGreetedList
}

function getnameGreetNow(){
    return nameGreetNow
}

    return {
        greetMessage,
        getnameGreetNow,
        getNamesList,
        setNames,
        setNameCount,
        setNamesGreetedList

    }

}

