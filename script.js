url = "https://exceed.superposition.pknn.dev/data/15"

function POST() {
    let text = document.getElementById('Text_input').value
    var data = {door: "" ,buzzer: ""}
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
        'Content-Type': 'application/json'}
    })
}

let lasttext = ''
setInterval(function () {
    fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson)
    let text = JSON.stringify(myJson);
    if (lasttext != text){
    document.getElementById('main').innerHTML += `<h3>${text}</h3>`
    lasttext = text
}
  });
},1000)

