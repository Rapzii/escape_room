function sjekkSvar() {
    const answer = document.getElementById('answer').value.toLowerCase();
    const message = document.getElementById('message');

    if (answer === "klokke") {
        message.innerHTML = 'Riktig! Døren låses opp, og du klarer å unnslippe! <a href="skattekiste.html" target="_blank">Gå videre</a>';
        message.style.color = "#00ff00";
    } else {
        message.textContent = "Feil svar! Prøv igjen.";
        message.style.color = "#ff0000";
    }
}