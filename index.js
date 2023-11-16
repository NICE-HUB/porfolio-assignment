function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  document.getElementsByClassName("CPlana").addEventListener("click", displayDate);
    function displayDate() {
        document.getElementByClassName("CPlan").innerHTML = Date();
      }
      