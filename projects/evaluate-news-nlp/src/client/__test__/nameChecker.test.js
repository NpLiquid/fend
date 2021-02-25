// Import the js file to test
import { checkForName } from "../js/nameChecker"
    
describe("Testing that the name entered is in the names' list", () => {
    test("Testing the checkForName() function", () => {

        expect(checkForName('')).toBe(false);
        
})});