// two variable created for display and button function 

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

//we map through our buttons array and add click eventlistener for every button in our array
buttons.map(button =>{
    //add a call back function for our eventlistener by h which will get event
    button.addEventListener('click',(h) =>{
        // we use switch statement and can inseert the same value typed 
        //so by deafult will add innertext of button to inner text of display
        switch(h.target.innertext){
            
        }
       /* we use to identify which button is clicked
        console.log('clicked')
        console.log(h);
        console.log(h.target);
        console.log(h.target.innerText);*/


    });
});