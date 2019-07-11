url = "https://exceed.superposition.pknn.dev/data/15"

function POST_door() {
    let text = document.getElementById('Text_input').value
    var data = {door: false}
    fetch(url + "/door", {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
        'Content-Type': 'application/json'}
    })
}

function POST_buzzer() {
  let text = document.getElementById('Text_input').value
  var data = {buzzer: false}
  fetch(url + "/buzzer", {
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

