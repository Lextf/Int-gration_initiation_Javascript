var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
  item.addEventListener("click", event => {
    modalEle.style.display = "block";
    modalImage.src = event.target.src;
  });
});
document.querySelector(".close").addEventListener("click", () => {
  modalEle.style.display = "none";
});



function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}