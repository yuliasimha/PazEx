var images = [
    "images/250X110668568400.jpg",
    "images/banner_atar.jpg",
    "images/250X110571325734.jpg"
  ]

  var bannerImage = document.getElementById("bannerImage");
  var i = 0;

setInterval(function() {
    bannerImage.src = images[i];
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 1000);
