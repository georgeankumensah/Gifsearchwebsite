document.querySelector(".container-button").addEventListener("click", async (e) => {
    var input = document.querySelector(".container").value;
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

const pushToDOM = input => {
    var container = document.querySelector(".searchfor");
    if (input === ""){
        container.innerHTML ="";
    }else{
        container.innerHTML = "<h1 class='txtresult'>Search results for : <span id='result'>"+ input + "</span></h1>";
    }
}


var gifBox = document.querySelector(".gifpack");
const pushAsGif = post => {gifBox.innerHTML += post}
const clear =()=>{
    gifBox.innerHTML = "" ;
}

const url = "https://api.giphy.com/v1/gifs/search?api_key=PPvQ86bgvMTOX18AREXCwZzdIkXJmmAS&limit=25&offset=0&rating=g&lang=en&q=" 

async function GIPHYAPICALL(input){
 await axios.get(url + input)
    .then(
        (response) => {
            const length = response.data.data.length
            clear()
            for(let i = 0 ;i < length; i++){
                var image = response.data.data[i].images.original.url;
                const post = `<img src=${image}/>`;
                pushAsGif(post);

            }
        }
    )
    }   



