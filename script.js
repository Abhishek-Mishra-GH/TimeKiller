let subreddit = "/";
const memeImg = document.getElementById("meme-img");
const nextMemeBtn = document.getElementById("next-meme-btn");
const setBtn = document.getElementById("set-btn");

async function nextMeme() {
    memeImg.src = "./loading-splash.gif";

    let url = "https://meme-api.com/gimme";
    if (subreddit != "/") url += subreddit;

    let req = await fetch(url);
    let resp = await req.json();
    memeImg.src = resp["url"];
    nextMemeBtn.style.color = "white";
    setBtn.style.color = "white";
}

function set() {
    subreddit = '/';
    subreddit += document.getElementById("subreddit").textContent.trim();
    nextMeme();
    setBtn.style.color = "white";
}

nextMeme();