window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "red";
  } else {
    document.getElementById("header").style.backgroundColor = "blue";
  }
}