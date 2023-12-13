var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  
var element = document.querySelector('.fone');
var element1 = document.querySelector('.fone1');
var element2 = document.querySelector('.fone2');

// Получение значения свойства display
var displayValue = window.getComputedStyle(element).getPropertyValue('display');
var displayValue1 = window.getComputedStyle(element1).getPropertyValue('display');
var displayValue2 = window.getComputedStyle(element2).getPropertyValue('display');



  if(displayValue=='block')
  {

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Меняйте изображение каждые 4 секунды
}

  if(displayValue1 =='block'){

  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Меняйте изображение каждые 4 секунды

}


if(displayValue2 =='block'){

  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Меняйте изображение каждые 4 секунды

}


}

