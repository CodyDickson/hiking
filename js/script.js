// Image Forward / Back
var hike1 = ["images/1hike/1hike_1.jpg", "images/1hike/1hike_2.jpg", "images/1hike/1hike_3.jpg", "images/1hike/1hike_4.jpg", "images/1hike/1hike_5.jpg"];
var hike1Index = 0;

function change_image() {
    var img = document.getElementById("firstImg");
    hike1Index = ++hike1Index % 5;
    img.src = hike1[hike1Index];
}

// Get the modal
var modal = document.getElementById("firstModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("firstImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}