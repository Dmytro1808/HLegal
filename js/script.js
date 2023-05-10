$(document).ready(function(){
    $('#slick').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      adaptiveHeight: true,
      dots: true,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
    $('.burger ').click (function(){
      $(this).toggleClass('active')
      $('.nav-link').toggleClass('active')
      $('.none').toggleClass('active')
      if ($('body').css('overflow') === 'hidden') {
        $('body').css('overflow', '');
      } else {
        $('body').css('overflow', 'hidden');
      }
    }
    );
  });
  function scrollToElem(elem) {
    event.preventDefault()
    const target = document.querySelector(elem.hash)
    window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
    })
}
$(document).ready(function(){
  $('#slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
});
document.getElementById("open").addEventListener("click", function(){
  document.getElementById("my-modal").classList.add("open")
})
document.getElementById("close").addEventListener("click", function(event){
  if(this === event.target) 
  document.getElementById("my-modal").classList.remove("open");
})
document.getElementById("my-modal").addEventListener("click", function(event){
  if(this === event.target) 
  document.getElementById("my-modal").classList.remove("open")
})