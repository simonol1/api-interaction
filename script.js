// declare global variables and get the elements from index.html
var btn = document.getElementById('btn');
var proverb = document.getElementById('proverb');
var translation = document.getElementById('translation');

// add event listener so that when i right click my mouse the button function will start
btn.addEventListener('click', function() {
  var myData; // declare local variable myData
  var myRequest = new XMLHttpRequest(); // create a request to pull data from another website
  myRequest.open('GET', 'https://eda-te-reo.herokuapp.com/api/proverbs', false); // details of this data and the URL address. Use the API 'GET' to retreive the data. The arguement 'False' to related to the time it takes to retreive this data.
  myRequest.onload = function() { // function will engage when the request is loaded
    myData = JSON.parse(myRequest.responseText); // Use JSON to
  }
    myRequest.send(); // call the function

    console.log(myData); // log return to the function for assessment
    proverb.innerHTML = "Proverb: " + myData.source; // return the html content related to the proverb from the myData variable using dot notation
    translation.innerHTML = "Translation: " + myData["translation"]; // return the html conetent related to the translation using bracket notation.
});