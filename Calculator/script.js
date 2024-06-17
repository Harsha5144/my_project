let input=document.getElementById('inputBox');
 let buttons =document.querySelectorAll('button');
 let percentage=document.getElementById('percentage');


 let string="";
 let arr = Array.from(buttons);
 arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '='){
            string = eval (string);
            input.value = string;

        }
        else if(e.target.innerHTML == 'AC'){
            string ="";
            input.value= string;
        }
        else if (e.target.innerHTML == 'DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else if(e.target.innerHTML == '%'){
            string =eval (string);
            input.value= string;
        if (e.target.id == 'string') {
            // Calculate percentage
            let percent = parseFloat(string) / 100;
            input.value = percent;
        }

        }
        else {
            string+= e.target.innerHTML;
            input.value = string;

        }      
    })
 })