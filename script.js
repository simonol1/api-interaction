
var btn = document.getElementById('btn');
var proverb = document.getElementById('proverb');
var translation = document.getElementById('translation');

btn.addEventListener('click', function() {
  var myData;
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs', false);
  myRequest.onload = function() {
    myData = JSON.parse(myRequest.responseText);
  }
    myRequest.send();

    console.log(myData);
    proverb.innerHTML = "Proverb: " + myData.source;
    translation.innerHTML = "Translation: " + myData["translation"];
});