let languageInput = "en";
languageInput = window.prompt("Please add language", "en");

function switchLanguage(language) {
    language = languageInput;
    switch (language) {
        case "es":
            console.log("Hola Mundo " + language)
            alert("Hola Mundo " + language)
            break;
        case "de":
            console.log("Hallo Welt "+ language)
            alert("Hallo Welt " + language)
            break;
        default:
            console.log("Hello world " + language)
            alert("Hello world " + language)

    }
    return language;
}

switchLanguage(console.log("Function called with input " + languageInput));