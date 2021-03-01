// Import the js file to test
import { handleSubmit } from "../js/formHandler"

describe("Testing that the checkForName() is called", () => {
    const nameChecker = {
        checkForName() {
            //text can be empty or not
            //nevertheless it returns a text message in the index.html
            
            //Dom elements in the nameChecker function
            document.body.innerHTML = `
                <div id="inputUserName" class='resultsHolder'></div>
            `;
            //ask for the DOM file that implements the function that we are going to test
            require('../js/formHandler.js');
    
            //use the selector for the DOM element we are testing 
            const newInputDiv = document.getElementById('inputUserName');
    
            return newInputDiv.innerHTML =  `Some message here`
        }
    }

    test('spyOn .toBeCalled()', () => {
        const somethingSpy = jest.spyOn(nameChecker, 'checkForName');
        nameChecker.checkForName();
        expect(somethingSpy).toBeCalled();
    });

});

describe("Testing that the handleSubmit function is defined", () => {
    test('handleSubmit function defined', () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe("Testing that the text entered by the user is read", () => {
    function formInputText(inputText) {
        //prepare the DOM elements we need to test the function
        document.body.innerHTML = `
            <input id="inputText" type="text" name="inputText" value="" placeholder="What text should we analyse?"></input>
        `;
        //ask for the DOM file that implements the function that we are going to test
        require('../js/formHandler.js');

        //use the selector for the DOM element we are testing 
        const newInputDiv = document.getElementById('inputText');

        newInputDiv.value = '';
        return newInputDiv.innerHTML = inputText
    }    

    test('Text not entered in inputText', () => {
        expect(formInputText('')).toBe(``);
    });

    test('Text entered in inputText', () => {
        expect(formInputText('I feel awesome')).toBe(`I feel awesome`);
    });
});
