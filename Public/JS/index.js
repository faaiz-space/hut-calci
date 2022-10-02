window.addEventListener('load',()=>
{

let preloader=document.querySelector('.preload');
preloader.classList.add("preload_finish");

})

// new line 

function rotate() {
  let card_inside = document.getElementsByClassName("card-content");
  card_inside[0].classList.add("clicked");
  setTimeout(() => {
    card_inside[0].classList.remove("clicked");
  }, 3000);
}

let colors = [
  "#009b6d",
  "#00d796",
  "#51bf9e",
];
let nav = document.getElementById("nav");
let i = 0;
function changecolor() {
  if (i >= colors.length) i = 0;
  nav.style.color = colors[i++];
}
setInterval(changecolor, 5000);

//Animation of heading at the onload
setTimeout(() => {
  // let headingContent = document.getElementsByClassName("heading_content");

  let window_height = window.innerHeight;

  // window.addEventListener("load", () => {
  //   headingContent[0].style.top = "10px";
  //   headingContent[0].style.opacity = "1";
  // });
}, 30);

// Animation of the nav elements and the logo

window.addEventListener('load',()=>{

  setTimeout(() => {
    let logo = document.getElementById("logo");
    let navElements = document.getElementById("nav_id");
    let mediaQuery = window.matchMedia("max-width:800px");
  
    
      logo.style.opacity = "1";
      navElements.style.opacity = "1";
  
  }, 30);
});

// Animation for scroll effect do only for each element

setTimeout(() => {
    let card = document.getElementsByClassName("flipHide");
    
    
    window.addEventListener("scroll", () => {
        let cardPos=card[0].getBoundingClientRect().top;
       
        let window_height = window.innerHeight;
        console.log(window_height)
        console.log(cardPos)
        if(cardPos < window_height/1.1)
        {
            console.log("running")
           card[0].classList.add('flip_card_shown');

        }
        else
        {
          card[0].classList.remove('flip_card_shown');

        }
    });
  }, 30);

