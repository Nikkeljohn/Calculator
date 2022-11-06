// two variable created for display and button function 

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

//we map through our buttons array and add click eventlistener 
buttons.map(button => {
    //add a call back function for our eventlistener 
    button.addEventListener('click', (h) => {
        // we use switch statement and can inseert the same value typed 

        switch (h.target.innerText) {

            //a

            case 'C':
                display.innerText = '';
                //we break the statement by executing break and doesn't show c
                break;

            // here we add back arrow to delete miss typed number

            case '←':
                // this will only remove if any test is on display
                if (display.innerText) {
                    // here we use string slice method to remove from display string
                    display.innerText = display.innerText.slice(0, -1);
                }
                // break is used to aviod arrow button
                break;

            //most immportant function "="
            case "=":
                // used to handle in valid expression
                try {
                    //  used eval function so it can take string and excute as js
                    display.innerText = eval(display.innerText);
                }
                //if invalid expression is done then it will excute whats in catch statement
                catch {
                    display.innerText = "ERROR!";
                }
                //used break function to aviod display =
                break;

            //will display content when clicked
            default:
                display.innerText += h.target.innerText;
        }

    });
});
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
