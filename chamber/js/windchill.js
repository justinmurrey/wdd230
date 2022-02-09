function doInputOutput() {
  let temp = parseFloat(document.getElementsByClassName("Temp").value);
  console.log(temp);
  let speed = parseFloat(document.getElementById("Wind Speed").value);
  console.log(speed);
  let WC = windchill(temp, speed);
  console.log(WC);
  document.getElementById("outputDiv").innerHTML = WC;
}
function windchill(tempF, speed) {
  let f =
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * tempF * Math.pow(speed, 0.16);

  return f;
}
