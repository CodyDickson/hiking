// Image Galleries
var galleries = [
  ["images/hike1/hike1_1.jpg", "images/hike1/hike1_2.jpg", "images/hike1/hike1_3.jpg", "images/hike1/hike1_4.jpg", "images/hike1/hike1_5.jpg"],
  ["images/hike2/hike2_1.jpg", "images/hike2/hike2_2.jpg","images/hike2/hike2_3.jpg"],
  ["images/hike3/hike3_1.jpg", "images/hike3/hike3_2.jpg","images/hike3/hike3_3.jpg"]
];
var hike1Index = 0;
var hike2Index = 0;
var hike3Index = 0;

// Arrow moving forward (right)
function changeImage(hikeNumber) {
  var img = document.getElementById(hikeNumber);
  if (hikeNumber == "hike1") {
    hike1Index = (hike1Index == 4) ? 0 : hike1Index + 1;
    img.src = galleries[0][hike1Index]
  } else if (hikeNumber == "hike2") {
    hike2Index = (hike2Index == 2) ? 0 : hike2Index + 1;
    img.src = galleries[1][hike2Index]
  } else if (hikeNumber == "hike3") {
    hike3Index = (hike3Index == 2) ? 0 : hike3Index + 1;
    img.src = galleries[2][hike3Index]
  }
}

// Arrow moving backwards (left)
function changeImageBack(hikeNumber) {
  var img = document.getElementById(hikeNumber);
  if (hikeNumber == "hike1") {
    hike1Index = (hike1Index == 0) ? 4 : hike1Index - 1;
    img.src = galleries[0][hike1Index]
  } else if (hikeNumber == "hike2") {
    hike2Index = (hike2Index == 0) ? 2 : hike2Index - 1;
    img.src = galleries[1][hike2Index]
  } else if (hikeNumber == "hike3") {
    hike3Index = (hike3Index == 0) ? 2 : hike3Index - 1;
    img.src = galleries[2][hike3Index]
  }
}

// Get the modal
var modal = document.getElementById("firstModal");

// Get the image and insert it inside the modal
var img = document.getElementById("firstImg");
var modalImg = document.getElementById("img01");
/* img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
} */

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
