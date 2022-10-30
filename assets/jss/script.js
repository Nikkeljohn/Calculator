// two variable created for display and button function 

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

//we map through our buttons array and add click eventlistener for every button in our array
buttons.map(button =>{
    //add a call back function for our eventlistener by h which will get event
    button.addEventListener('click',(h) =>{
        // we use switch statement and can inseert the same value typed 
        //so by deafult will add innertext of button to inner text of display
        switch(h.target.innerText){
           
           //and in this case if user clicks the "c" button it clears the display by setting the innertext an empty string

            case 'C':         
                display.innerText = '';
                //we break the statement by executing break and doesn't show c
                break;

            default:
                display.innerText += h.target.innerText;
        }
        
        
       // we use to identify which button is clicked

        console.log('clicked')
        console.log(h);
        console.log(h.target);
        console.log(h.target.innerText);


    });
});