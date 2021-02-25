function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formName = document.getElementById('name').value
    Client.checkForName(formName)

    // read the text that the user entered in the form
    let formInputText = document.getElementById('inputText').value
    //console.log(formInputText)

    if (formInputText == '') {
        let generalMessage = 'Well, I guess there is nothing to analyse. Maybe you want to try it again'
        document.getElementById('results').innerHTML = generalMessage
        console.log(generalMessage)
    } else {
        console.log("::: Form Submitted :::")

        // Send the data to the server to be send to the Sentiment Analysis API
        let dataToSend = {
            clientSideText: formInputText.replace(/ /g, "%20")
        }
        
        fetch('http://localhost:8080/SentimentAnalysis', {
            method: "POST",
            credentials: 'same-origin',
            body: JSON.stringify(dataToSend),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }) 
        .then(res => res.json())
        .then(function(res) {
            console.log('API response in client:', res)
            let responseMessage = `agreement: ${res.agreement}, confidence: ${res.confidence}, irony: ${res.irony}, score_tag: ${res.score_tag}, status code: ${res.status.code}, status message: ${res.status.msg}`
            document.getElementById('results').innerHTML = responseMessage
        })
        .catch(error => {
            console.log('Server inaccessible')
            alert(`Server inaccessible.\nThe Sentiment analysis can not be reached.\nTry again later`)
            throw error;
        })
    }
}

export { handleSubmit }
