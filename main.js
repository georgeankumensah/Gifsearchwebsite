document.querySelector(".container-button").addEventListener("click", async (e) => {
    var input = document.querySelector(".container").value;
    console.log(input);
    pushToDOM(input);
    await GIPHYAPICALL(input)
});

document.querySelector(".container").addEventListener('keypress',async (e) => {
    var input = document.querySelector(".container").value;
    if (e.which === 13){
        pushToDOM(input);
        await GIPHYAPICALL(input)

    }
});

const pushToDOM = input =>{
    var container = document.querySelector(".searchfor");
    container.innerHTML = "<h1 class='txtresult'>Search results for : <span id='result'>"+ input + "</span></h1>";
}
var gifBox = document.querySelector(".gifpack");
const pusher = post => {gifBox.innerHTML += post}
const clear =()=>{
    gifBox.innerHTML = ""
}

// var input = document.querySelector(".container").value;
const url = "https://api.giphy.com/v1/gifs/search?api_key=PPvQ86bgvMTOX18AREXCwZzdIkXJmmAS&limit=25&offset=0&rating=g&lang=en&q=" 

// const GIPHYAPICALL = require('axios');
async function GIPHYAPICALL(input){
    console.log(input)
 await axios.get(url + input)
    .then(
        (response) => {
            // console.log(response.data[0].images.original.url)
            console.log(image)
            const length = response.data.data.length
            clear()
            for(let i = 0 ;i < length; i++){
                var image = response.data.data[i].images.original.url;
                const post = `<img src=${image}/>`;
                pusher(post);

            }
            console.log(post)
        }
    )
    }   



