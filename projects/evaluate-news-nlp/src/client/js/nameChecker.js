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
        alert(`Welcome, Captain ${inputText}!`)
    }else{
        if (inputText == '') {
            alert(`Oh, you do not have a name!`)
        }else{
            alert(`Welcome, Stranger ${inputText}!`)
        }
    }
}

export { checkForName }
