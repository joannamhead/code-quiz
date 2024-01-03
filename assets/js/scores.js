let store = localStorage.players ? JSON.parse(localStorage.players) : [];

if (store.length) {
    store.forEach(obj => {
        document.getElementById('highscores').innerHTML += `<li>${obj.initials} - ${obj.score}</li>`
    });
}