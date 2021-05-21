var request = new XMLHttpRequest();

var username = document.getElementById('user')
var password = document.getElementById('pass')
var rquest = document.getElementById('rquest')

request.open('GET', 'https://api.jikan.moe/v3/user/-Anime-se/animelist/all');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();