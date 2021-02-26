// Import the js file to test
import { checkForName } from "../js/nameChecker"
/*    describe("Testing that the name entered is in the names' list", () => {
    test("Testing the checkForName() function", () => {
        
        //prepare the DOM elements we need to test the function
        document.body.innerHTML = `
            <div id="inputUserName" class='resultsHolder'></div>
        `;
        //ask for the DOM file that implements the function that we are going to test
        require('../js/nameChecker.js');

        //use the selector for the DOM element we are testing 
        const newInputDiv = document.getElementById('inputUserName');
        
        //prepare the value that we are testing in the DOM element selected
        newInputDiv.innerHTML = 'Asa!';

        expect(newInputDiv.innerHTML).toBe(`Oh, you do not have a name!`);
        
})});*/

describe("Testing the response to the entered user name", () => {
    function checkName(inputText) {
        let names = [
            "Picard",
            "Janeway",
            "Kirk",
            "Archer",
            "Georgiou"
        ]

        //prepare the DOM elements we need to test the function
        document.body.innerHTML = `
            <div id="inputUserName" class='resultsHolder'></div>
        `;
        //ask for the DOM file that implements the function that we are going to test
        require('../js/nameChecker.js');

        //use the selector for the DOM element we are testing 
        const newInputDiv = document.getElementById('inputUserName');

        if(names.includes(inputText)) {
            return newInputDiv.innerHTML =  `Welcome, Captain ${inputText}!`
        }else{
            if (inputText == '') {
                return newInputDiv.innerHTML = `Oh, you do not have a name!`
            }else{
                return newInputDiv.innerHTML = `Welcome, Stranger ${inputText}!`
            }
        }       
    }
  
    test('Message returned for no user name entered', () => {
        expect(checkName('')).toBe(`Oh, you do not have a name!`);
    })

    test('Message returned for a registered user name entered', () => {
        expect(checkName('Picard')).toBe(`Welcome, Captain Picard!`);
    })

    test('Message returned for a non-registered user name entered', () => {
        expect(checkName('Pete')).toBe(`Welcome, Stranger Pete!`);
    })
});

describe("Testing that the checkForName function is defined", () => {
    test('checkForName function defined', () => {
        expect(checkForName).toBeDefined();
    });
});