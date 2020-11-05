// const q = "bay area";
// const apiKey = "qb5hMguBjooMrKm8H0CycUusUFII5Nqf";
// const path = "https://api.giphy.com/v1/gifs/random?api_key="

const uri = "https://api.giphy.com/v1/gifs/search?api_key=qb5hMguBjooMrKm8H0CycUusUFII5Nqf&q=thizz&limit=25&offset=0&rating=g&lang=en";
const currentFullTime = new Date();
console.log(currentFullTime.getDate());


// Fetch Giffy Api
fetch(uri).then((res) => {
    return res.json();
}).then((json) => {
    let gifUrl = json.data[4].images.fixed_height.url;
    let img = new Image();
    let fetchImg = document.getElementById('fetchImg');
    fetchImg.appendChild(img);
    img.src = gifUrl;

}).catch((err) => console.log(err.message));

let currentTime = document.getElementById('currentTime');
currentTime.append(currentFullTime);

