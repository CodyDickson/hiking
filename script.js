// Image Forward / Back
var galleries = [
  ["images/hike1/hike1_1.jpg", "images/hike1/hike1_2.jpg", "images/hike1/hike1_3.jpg", "images/hike1/hike1_4.jpg", "images/hike1/hike1_5.jpg"],
  ["images/hike2/hike2_1.jpg", "images/hike2/hike2_2.jpg","images/hike2/hike2_3.jpg"],
  ["images/hike3/hike3_1.jpg", "images/hike3/hike3_2.jpg","images/hike3/hike3_3.jpg"]
];
var index = [
  
];
var hike1Index = 0;
var hike2Index = 0;
var hike3Index = 0;

function changeImage(hikeNumber) {
  var img = document.getElementById(hikeNumber);
  if (hikeNumber == "hike1") {
    ++hike1Index;
    var max = 4;
    var index = hike1Index;
    var galleryIndex = 0;
    if (hike1Index == 4) {
      hike1Index = -1;
    }
  } else if (hikeNumber == "hike2") {
    ++hike2Index;
    var max = 2;
    var index = hike2Index;
    var galleryIndex = 1;
    if (hike2Index == 2) {
      hike2Index = -1;
    }
  } else if (hikeNumber == "hike3") {
    ++hike3Index;
    var max = 2;
    var index = hike3Index;
    var galleryIndex = 2;
    if (hike3Index == 2) {
      hike3Index = -1;
    }
  }
  if (index < max) {
    img.src = galleries[galleryIndex][index];
  } else {
    img.src = galleries[galleryIndex][index];
  }
}

/* function changeImage(hikeNumber) {
  var img = document.getElementById("hike1");
  if (hikeNumber == "hike1") {
    var max = hike1Max;
    var index = hike1Index;
  } else if (hikeNumber == "hike2") {
    var max = hike2Max;
    var index = hike2Index;
  } else if (hikeNumber == "hike3") {
    var max = hike3Max;
    var index = hike3Max;
  }
  if (index == max) {
    img.src = hike1[hike1Index];
    index = -1;
  } else {
    img.src = hike1[hike1Index];
    ++index;
  }
} */

/*
const forEach ()

function addEventListener() {
  document.getElementsByClassName("arrowRight").addEventListener('click', (e) => {
  const index = e.target.dataset.gallery;
  const gallery = galleries[index];
  change_image(gallery);
});
}
*/

function changeImageBack(hikeNumber) {
  var img = document.getElementById("firstImg");
  hike1Index = --hike1Index;
  if (hike1Index < 0) {
    hike1Index = 4;
    img.src = hike1[hike1Index];
  } else {
    img.src = hike1[hike1Index];
  }
}

/*   hike1Index = ++hike1Index;
  if (hike1Index == hike1Max) {
    img.src = hike1[hike1Index];
    hike1Index = -1;
  } else {
    img.src = hike1[hike1Index];
  }*/

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
