// two variable created for display and button function 

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

//we map through our buttons array and add click eventlistener for every button in our array
buttons.map(button =>{
    //add a call back function for our eventlistener 
    button.addEventListener('click',(h) =>{
        // we use switch statement and can inseert the same value typed 
        
        switch(h.target.innerText){
           
           //a

            case 'C':         
                display.innerText = '';
                //we break the statement by executing break and doesn't show c
                break;

                //

                case '=':

                //will display content when clicked
                    default:
                        display.innerText += h.target.innerText;
 }
        
        
       // tried  to identify which button is clicked is working 

        console.log('clicked')
        console.log(h);
        console.log(h.target);
        console.log(h.target.innerText);


    });
});
// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}