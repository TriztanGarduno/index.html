let images = Array.from(document.getElementsByClassName("imgCarousel"));

let mainPhoto = document.getElementById("mainPhoto");
let mainName = mainPhoto.getAttribute("name");
updateCaption(mainName);

function updateImage(event) {
  let image = event.target;
  let name = image.getAttribute("name");

  mainPhoto.src = image.src;
  updateCaption(name);
}

function updateCaption(event) {
  let caption = (document.getElementById("caption").innerHTML = event);
}

images.forEach(function (image) {
  image.addEventListener("click", updateImage);
});

//Script Galería Teotihuacan

$('.portfolio-menu ul li').click(function(){
  $('.portfolio-menu ul li').removeClass('active');
  $(this).addClass('active');
  
  var selector = $(this).attr('data-filter');
  $('.portfolio-item').isotope({
    filter:selector
  });
  return  false;
});
$(document).ready(function() {
var popup_btn = $('.popup-btn');
popup_btn.magnificPopup({
type : 'image',
gallery : {
  enabled : true
}
});
});

