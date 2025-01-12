document.addEventListener("DOMContentLoaded", getTime);

function getTime() {
  var currentDate = new Date();
  var hours = currentDate.getHours();

  let bg = document.getElementById("backGround");
  let section = document.getElementById("section")
  if (hours >= 6 && hours < 18) {
    bg.setAttribute("src", "images/day.jpg");
    section.setAttribute("src", "images/rightSection1.jpg");
  } else if (hours >= 18 && hours < 24) {
    bg.setAttribute("src", "images/midday.jpg");
    section.setAttribute("src", "images/rightSection2.jpg");
  } else if (hours < 6) {
    bg.setAttribute("src", "images/night.jpg");
    section.setAttribute("src", "images/rightSection3.jpg");
  }
}
