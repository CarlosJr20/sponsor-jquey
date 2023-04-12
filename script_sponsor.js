$(document).ready(function() { 
  var divSponsors = $('#swiper-sponsors .swiper-wrapper'); 
  var divElements = divSponsors.children(); 

  divElements.sort(function() { 
    return 0.5 - Math.random(); 
   }); 

   divSponsors.empty().append(divElements); 

   var swiperDramaClub = new Swiper('#swiper-sponsors', { 
    slidesPerView: 5, 
     spaceBetween: 10, 
     breakpoints: { 
     980: { slidesPerView: 3 }, 
      460: {  slidesPerView:2 } 
      },         
       scrollbar: { 
       el: '.swiper-scrollbar' 
      }, 
      autoplay: { 
        delay: 3000, 
        },    
        loop: true, 
      }); 
    }); 
