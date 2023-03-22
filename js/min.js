//let landingpage = document.querySelector(".landing");
//let imgsArray=["01.jpg","02.jpg","03.jpg","04.jpg"];

//setInterval(()=> {
//let randomNumber = Math.floor(Math.random() * imgsArray.length)
//landingpage.style.backgroundImage='url("../images/'+ imgsArray[randomNumber] +'")';
//},2000);

//const alllinks=document.querySelectorAll(".links a");
//function scrolltosomewhere(elements){
  //elements.forEach(ele => {
    //ele.addEventlistener("click",(e)=>{
      //e.preventDefault();
      //document.querySelector(e.target.dataset.section).scrollIntoview({
      //  behavior:'smooth'
    //});
 // });
//});
//}

//scrolltosomewhere(alllinks);

window.addEventListener('DOMContentLoaded', () => {
  let scrollPos = 0;
  const mainNav = document.getElementById('mainNav');
  const headerHeight = mainNav.clientHeight;
  window.addEventListener('scroll', function() {
      const currentTop = document.body.getBoundingClientRect().top * -1;
      if ( currentTop < scrollPos) {
          // Scrolling Up
          if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
              mainNav.classList.add('is-visible');
          } else {
              console.log(123);
              mainNav.classList.remove('is-visible', 'is-fixed');
          }
      } else {
          // Scrolling Down
          mainNav.classList.remove(['is-visible']);
          if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
              mainNav.classList.add('is-fixed');
          }
      }
      scrollPos = currentTop;
  });
})
