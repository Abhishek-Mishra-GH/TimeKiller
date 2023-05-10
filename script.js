async function nextMeme() {
    const url = "https://meme-api.com/gimme";
    let req = await fetch(url);
    let resp = await req.json();
    document.getElementById("meme-img").src = resp["url"];
}

nextMeme();