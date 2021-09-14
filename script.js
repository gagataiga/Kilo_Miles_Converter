(function () {

  "use strict";
  
  let convertType = "miles";
  let heading = document.querySelector("h1");
  let intro = document.querySelector("p");
  let answerDiv = document.getElementById("answer");
  let form = document.querySelector("convert");

  document.addEventListener("keydown", function (e) {
    let key = e.code;
    // key code
    if (key === "KeyK") {
      convertType = "kilometers";
      heading.innerHTML = "Kilometer to Miles Converter";
      intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles";
      
    } else if (key === "KeyM") {
      convertType = "miles";
      heading.innerHTML = "Miles Converter to Kilometer";
      intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers";
    }
  });

  document.addEventListener("submit", function (event) {
    
    event.preventDefault();

    let distance = parseFloat(document.getElementById("distance").value);

    let mileConverted = (distance * 1.609344).toFixed(3);
    let kiloConverted = (distance * 0.621371).toFixed(3);

    if (distance) {
      if (convertType == "miles") {
        answerDiv.innerHTML = `${distance} kilometers convert to ${kiloConverted} miles`;
      } else if (convertType == "kilometers") {
        answerDiv.innerHTML = `${distance} miles convert to ${mileConverted} kilometers`;
        }
    } else {
      answerDiv.innerHTML = "<h2>Please provide a number</h2>";
    }
  });

})();
