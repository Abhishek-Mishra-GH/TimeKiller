async function nextMeme() {
    const memeImg = document.getElementById("meme-img");
    const nextMemeBtn = document.getElementById("next-meme-btn");
    memeImg.src = "./loading-splash.gif"

    const url = "https://meme-api.com/gimme";
    let req = await fetch(url);
    let resp = await req.json();
    memeImg.src = resp["url"];
}

nextMeme();