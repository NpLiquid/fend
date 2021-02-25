import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

let user_name = checkForName;
console.log(user_name);

alert("Welcome to the Sentiment Analysis Test Website")
console.log("CHANGE!!");

export {
    checkForName,
    handleSubmit
}