let input= document.getElementById('inputbtn');
let buttons= document.querySelectorAll('button');

let string =""; //empty string for storing result 

//for all buttons use array
let arr= Array.from(buttons);
arr.forEach(button=>
{
    button.addEventListener('click', (e)=> // jab b click kry gy to e pass hota rhy ga
    {
       if(e.target.innerHTML == '=') //if the button clicked is = then do this
       {
        string= eval(string); // eval is an in built func in JS that will evaluate string
        input.value= string; //string is storing in Input value 
       }
       else if(e.target.innerHTML == 'AC')
       {
        string="";
        input.value=string;
       }
        else if (e.target.innerHTML == 'DEL')
        {
            string= string.substring(0, string.length-1); //for removing last digit we use substring function
            input.value=string;
        }
       else
       {
       // if the button is not = (other button like 1,2,4,5)
       string+= e.target.innerHTML //buttons are added in string
       input.value = string;
       }
    })
}
)