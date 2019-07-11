const url = "https://exceed.superposition.pknn.dev/data/15"
prison_data = {}

function POST_door() {
    let text = document.getElementById('Text_input').value
    let swap = {"close":"open", "open":"close"}
    var value = swap[prison_data['door']]
    var data = {"value": value}
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
  let swap = {"off":"on", "on":"off"}
  let value = swap[prison_data['buzzer']]
  var data = {"value": value}
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
  let swap = {"off":"on","on":"off"}
  var value = swap[prison_data['light']]
  var data = {"value": value}
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
        "light" : "off"}
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
    prison_data = myJson
}
  });
},1000)

