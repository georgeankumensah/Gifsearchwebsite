// grab the input

document.querySelector(".container-button").addEventListener("click",(e) => {
    var input = document.querySelector(".container").value;
    console.log(input); 
    pushToDOM(input);
});

document.querySelector(".container-button").addEventListener('keypress',(e) => {
    alert("hey I'm working");
    var input = document.querySelector(".container").value;
    console.log(input); 
    if (e.key === 13){
        pushToDOM(input);
    }
});

const pushToDOM = input =>{
    var container = document.querySelector(".data-container");
    container.innerHTML = "<h1 class='txtresult'>Search results for : <span id='result'>"+ input + "</span></h1>";
}



//  function we(){
//      alert("done!");
//  };
