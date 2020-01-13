// Image Galleries
var galleries = [
  ["images/hike1/hike1_1.jpg", "images/hike1/hike1_2.jpg", "images/hike1/hike1_3.jpg", "images/hike1/hike1_4.jpg", "images/hike1/hike1_5.jpg", "images/hike1/hike1_6.jpg", "images/hike1/hike1_7.jpg", "images/hike1/hike1_8.jpg", "images/hike1/hike1_9.jpg", "images/hike1/hike1_10.jpg", "images/hike1/hike1_11.jpg", "images/hike1/hike1_12.jpg", "images/hike1/hike1_13.jpg", "images/hike1/hike1_14.jpg", "images/hike1/hike1_15.jpg", "images/hike1/hike1_16.jpg", "images/hike1/hike1_17.jpg", "images/hike1/hike1_18.jpg", "images/hike1/hike1_19.jpg", "images/hike1/hike1_20.jpg", "images/hike1/hike1_21.jpg", "images/hike1/hike1_22.jpg", "images/hike1/hike1_23.jpg", "images/hike1/hike1_24.jpg"],
  ["images/hike2/hike2_1.jpg", "images/hike2/hike2_2.jpg", "images/hike2/hike2_3.jpg", "images/hike2/hike2_4.jpg", "images/hike2/hike2_5.jpg", "images/hike2/hike2_6.jpg", "images/hike2/hike2_7.jpg", "images/hike2/hike2_8.jpg", "images/hike2/hike2_9.jpg", "images/hike2/hike2_10.jpg", "images/hike2/hike2_11.jpg", "images/hike2/hike2_12.jpg"],
  ["images/hike3/hike3_1.jpg", "images/hike3/hike3_2.jpg", "images/hike3/hike3_3.jpg", "images/hike3/hike3_4.jpg", "images/hike3/hike3_5.jpg", "images/hike3/hike3_6.jpg", "images/hike3/hike3_7.jpg", "images/hike3/hike3_8.jpg", "images/hike3/hike3_9.jpg", "images/hike3/hike3_10.jpg", "images/hike3/hike3_11.jpg", "images/hike3/hike3_12.jpg"],
  ["images/hike4/hike4_1.jpg", "images/hike4/hike4_2.jpg", "images/hike4/hike4_3.jpg", "images/hike4/hike4_4.jpg", "images/hike4/hike4_5.jpg", "images/hike4/hike4_6.jpg", "images/hike4/hike4_7.jpg", "images/hike4/hike4_8.jpg", "images/hike4/hike4_9.jpg", "images/hike4/hike4_10.jpg", "images/hike4/hike4_11.jpg", "images/hike4/hike4_12.jpg", "images/hike4/hike4_13.jpg", "images/hike4/hike4_14.jpg", "images/hike4/hike4_15.jpg", "images/hike4/hike4_16.jpg", "images/hike4/hike4_17.jpg", "images/hike4/hike4_18.jpg", "images/hike4/hike4_19.jpg", "images/hike4/hike4_20.jpg", "images/hike4/hike4_21.jpg", "images/hike4/hike4_22.jpg"]
];
var hike1Index = 0;
var hike2Index = 0;
var hike3Index = 0;
var hike4Index = 0;

// Arrow moving forward (right)
function changeImage(hikeNumber) {
  var img = document.getElementById(hikeNumber);
  if (hikeNumber == "hike1") {
    hike1Index = (hike1Index == 23) ? 0 : hike1Index + 1;
    img.src = galleries[0][hike1Index];
  } else if (hikeNumber == "hike2") {
    hike2Index = (hike2Index == 11) ? 0 : hike2Index + 1;
    img.src = galleries[1][hike2Index];
  } else if (hikeNumber == "hike3") {
    hike3Index = (hike3Index == 11) ? 0 : hike3Index + 1;
    img.src = galleries[2][hike3Index];
  } else if (hikeNumber == "hike4") {
    hike4Index = (hike4Index == 21) ? 0 : hike4Index + 1;
    img.src = galleries[3][hike4Index];
  }
}

// Arrow moving backwards (left)
function changeImageBack(hikeNumber) {
  var img = document.getElementById(hikeNumber);
  if (hikeNumber == "hike1") {
    hike1Index = (hike1Index == 0) ? 23 : hike1Index - 1;
    img.src = galleries[0][hike1Index];
  } else if (hikeNumber == "hike2") {
    hike2Index = (hike2Index == 0) ? 11 : hike2Index - 1;
    img.src = galleries[1][hike2Index];
  } else if (hikeNumber == "hike3") {
    hike3Index = (hike3Index == 0) ? 11 : hike3Index - 1;
    img.src = galleries[2][hike3Index];
  } else if (hikeNumber == "hike4") {
    hike4Index = (hike4Index == 0) ? 21 : hike4Index - 1;
    img.src = galleries[3][hike4Index];
  }
}

/* Modal Content */
var modal = document.getElementById("picModal");
var image = document.getElementById("hike1");
var image2 = document.getElementById("hike2");
var image3 = document.getElementById("hike3");
var image4 = document.getElementById("hike4");
var modalImg = document.getElementById("imgModal");
image.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
image2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
image3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
image4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Close the modal when the user clicks on the 'X'
span.onclick = function() { 
  modal.style.display = "none";
}
