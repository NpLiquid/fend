const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')

const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { Console } = require('console');
app.use(cors());

// You could call it MeaningCloud API, or anything else
var keyAPI = process.env.API_KEY
//console.log(`Your API key is ${keyAPI}`);

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

// Get text data from the client side to be analysed for sentiment with the MeaningCloud API
app.post('/SentimentAnalysis', function (req, res) {
    client_text_data = req.body.clientSideText
    //console.log(client_text_data)
    //res.send(meaningCloudAPI)
    let https = require('follow-redirects').https;
    let fs = require('fs');

    let options = {
        'method': 'POST',
        'hostname': 'api.meaningcloud.com',
        'path': `/sentiment-2.1?key=${keyAPI}&of=json&lang=en&txt=${client_text_data}&model=general`,
        'headers': {},
        'maxRedirects': 20
    };
    
    let reqAPI = https.request(options, function (resAPI) {
        let chunks = [];
        resAPI.on("data", function (chunk) {
            chunks.push(chunk);
        });
        
        resAPI.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            //console.log('end API: ', body.toString());
            res.send(body.toString())
        });
        
        resAPI.on("error", function (error) {
            console.error('error API', error);
        });
    });
    reqAPI.end();
})
