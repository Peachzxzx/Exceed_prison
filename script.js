const url = "https://exceed.superposition.pknn.dev/data/15"


function POST_door() {
    let text = document.getElementById('Text_input').value
    var data = {"value": "close"}
    fetch(url + "/door", {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
        'Content-Type': 'application/json'}
    }).then((res) => res.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err))
}

function POST_buzzer() {
  let text = document.getElementById('Text_input').value
  var data = {"value": "off"}
  fetch(url + "/buzzer", {
      method: 'PUT',
      body: JSON.stringify(data),
      headers:{
      'Content-Type': 'application/json'}
  }).then((res) => res.json())
  .then((data) => console.log(data))
  .then((err) => console.log(err))
}

function POST_light() {
  let text = document.getElementById('Text_input').value
  var data = {"value": "off"}
  fetch(url + "/light", {
      method: 'PUT',
      body: JSON.stringify(data),
      headers:{
      'Content-Type': 'application/json'}
  }).then((res) => res.json())
  .then((data) => console.log(data))
  .then((err) => console.log(err))
}

function POST_reset() {
  let text = document.getElementById('Text_input').value
  fetch(url , {
      method: 'POST',
      body: JSON.stringify({ "data" :{
        "door": "open",
        "buzzer": "off",
        "light" : "on"}
  }),
      headers:{
      'Content-Type': 'application/json'}
  }).then((res) => res.json())
  .then((data) => console.log(data))
  .then((err) => console.log(err))
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

