function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]
    
    if(names.includes(inputText)) {
        document.getElementById('inputUserName').innerHTML = `Welcome, Captain ${inputText}!`
    }else{
        if (inputText == '') {
            document.getElementById('inputUserName').innerHTML = `Oh, you do not have a name!`
        }else{
            document.getElementById('inputUserName').innerHTML = `Welcome, Stranger ${inputText}!`
        }
    }
}

export { checkForName }
