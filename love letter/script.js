function showMessage() {
    document.getElementById("hiddenMessage").style.display = "block";
    document.getElementById("loveYou").style.display = "block";
    document.getElementById("music").play();
}

function createHearts() {
    const heartContainer = document.querySelector(".hearts");

    for (let i = 0; i < 10; i++) { 
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

       
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 4 + 5 + "s"; 
        heart.style.fontSize = Math.random() * 20 + 20 + "px";

        heartContainer.appendChild(heart);

        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
}


setInterval(createHearts, 150);
