function myFunction(x) {
  x.style.color = "red";
}

function normalColor(x) {
  x.style.color = "black";
}

function checked() {
  var array = [];
  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }
  document.getElementById("task").style.color = "black"

  if (array.length == 0) {
    document.getElementById("task").innerHTML = "Complete the 4 tasks";
  } else if (array.length == 1) {
    document.getElementById("task").innerHTML =
      "Complete the 3 remaining tasks";
  } else if (array.length == 2) {
    document.getElementById("task").innerHTML =
      "Complete the 2 remaining tasks";
  } else if (array.length == 3) {
    document.getElementById("task").innerHTML = "Complete the  remaining task";
  } else if (array.length == 4) {
    document.getElementById("task").innerHTML =
      "All tasks are complete. Well done";
    document.getElementById("task").style.color = "red";
  }
}
