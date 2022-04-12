// grab the input

document.querySelector(".container-button").addEventListener("click",() => {
    var input = document.querySelector(".container").value;
    console.log(input); 
    pushToDOM(input);
});

function pushToDOM(input){
    var container = document.querySelector(".data-container");
    container.innerHTML = "<h1 class='txtresult'>Search results for : <span id='result'>"+ input + "</span></h1>";
}



//  function we(){
//      alert("done!");
//  };
