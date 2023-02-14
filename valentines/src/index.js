var load;
function showPreloader() {
  load = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("shadow").style.display = "none";
  document.getElementById("postcard").style.display = "block";
  document.getElementById("header").style.display = "block";
}

