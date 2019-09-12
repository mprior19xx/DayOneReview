//allways import files first
//takes everything from DataObject and labels as "Person"
import Person from './module/DataObject.js';

//this is an IFE -> immediately invoked function expression
//this is the Javascript Module Pattern
(() => {
    console.log('fired!');

    console.log(Person);
})();