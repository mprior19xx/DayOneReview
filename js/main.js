//allways import files first
//takes everything from DataObject and labels as "Person"
import Team from './module/DataObject.js';

//this is an IFE -> immediately invoked function expression
//this is the Javascript Module Pattern
(() => {
    console.log('fired!');

    let bioData = document.querySelector('.bio-wrapper').children;

    // populate the children with the data object values
    // bioData[0].src = "images/" + Person.avatar;
    // bioData[1].textContent = Person.name;
    // bioData[2].textContent = Person.role;
    // bioData[3].textContent = Person.bio;

    function parsePersonData(){
        //this. = the element that causes this function (the button you click on)
        let person = this.textContent;

        bioData[0].src = `images/${Team[person].avatar}`;
        bioData[1].textContent = Team[person].name;
        bioData[2].textContent = Team[person].role;
        bioData[3].textContent = Team[person].bio;
    }
    
    // loop thru then build some UI
    for (let person in Team) {
        console.log(person);
    

    //create a button for each member
    let currentButton = document.createElement('button');
    //add persons name to button
    currentButton.textContent = person;
    //add event handler to the bottom
    currentButton.addEventListener('click', parsePersonData);
    //put the button in team section html
    document.querySelector('.team').appendChild(currentButton);
        }
})();