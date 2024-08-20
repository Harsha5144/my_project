const Addinput = document.getElementById("input-take");
const listContainer= document.getElementById("list-Container");
// const inputchecked=document.getElementsByClassName("form-check-input");
const buttons=document.getElementById("group-btn");

function  addTask(){
    
    if(Addinput.value === ''){
        alert("please write something");
    }
    else{
        let li=document.createElement("li");
        
        li.innerHTML=Addinput.value;
        listContainer.appendChild(li);      
        let inputcheck =document.createElement("input");
        inputcheck.type="checkbox";
        inputcheck.className="form-check-input";
        li.appendChild(inputcheck);
        let span= document.createElement("span");
        span.className="bi bi-trash";
        // span.style.textDecoration(none);
        li.appendChild(span);         
}
 Addinput.value="";
 savedata();
}

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML)
 }
 function showdata(){
     listContainer.innerHTML=localStorage.getItem("data");
 }
 showdata();

//  buttons.addEventListener("click", function(d){
//     if(d.target.className ==="btn btn-success"){
//         console.log("hello");     
//         listContainer.localStorage("checked");
      
//     }
//     else if(d.target.className ==="btn btn-warning"){
//         console.log("hello 2");
//         listContainer.localStorage("");
//     }
//     else if(d.target.className ==="btn btn-outline-danger") {
//        localStorage.clear();
//        ;
//     }
//     showdata();
// },false)
   
listContainer.addEventListener("click", function(e){
    // if(e.target.tagName === "LI"){
        
    //     // document.getElementById("").style.co ='bold';
    //     // inputcheck.style.type='checked';
    // }
    if(e.target.className === "form-check-input"){
        console.log("hello5");
        const x=document.getElementsByClassName("form-check-input")
        if (x.checked == true){
            console.log("hello3");
           document.body.style.listContainer('textDecoration','line-through');
        //    listContainer.span.style.textDecoration='none';
        }
        else {
            // listContainer.style.textDecoration='none';
            // listContainer.span.style.textDecoration='none';
        }
        // listContainer.li.style.textDecoration="line-through";
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

