// Event Listener for 'pop-btns' animation
var popoutBtns = $('.pop-btns');
 popoutBtns.click(function(event) {
   if ($(event.target).hasClass("pop-btn1")) {
     $(event.target).toggleClass("popout");
     $(".pop-btn2, .pop-btn3").removeClass("popout");
     slideModal1();
   }
   else if ($(event.target).hasClass("pop-btn2")) {
     $(event.target).toggleClass("popout");
     $(".pop-btn1, .pop-btn3").removeClass("popout");
     slideModal2();
    }
    else if ($(event.target).hasClass("pop-btn3")) {
      $(event.target).toggleClass("popout");
      $(".pop-btn1, .pop-btn2").removeClass("popout");
      slideModal3();
    }
 });

 popoutBtns.hover(function(event) {
   $(event.target).addClass("popHover");
 },
   function(event) {
     $(event.target).removeClass("popHover");
   });






// Animation for h1
$("h1").hover(function(event) {
  $(event.target).addClass("h1-hover");
},
  function(event) {
    $(event.target).removeClass("h1-hover");
  });

// Animation for nav links
$(".nav-links").hover(function(event) {
  $(this).addClass("nav-link-hover");
},
  function(event) {
    $(this).removeClass("nav-link-hover");
  });

// Button hover animations
$("button").hover(function(event) {
  $(this).addClass("btn-hover");
},
  function(event) {
    $(this).removeClass("btn-hover");
  });

// Sliding Modal Animations
var modal1 = $("#Product-Modal1");
var modal2 = $("#Product-Modal2");
var modal3 = $("#Product-Modal3");

function slideModal1() {
  // check if modal is hidden to display or hide landing text
  isModalHidden();
  // display none for other modals
  modal2.fadeOut();
  modal3.fadeOut();
  // apply new color to all popout btns
  addColor1();
  };
// Is Modal1 hidden? If statment,
function isModalHidden() {
  if (modal1.is(":hidden")) {
    $(".heading-div, .subheading-div").delay(200).fadeOut();
    $(".red-stripe").slideUp(500, "linear");
    modal1.slideDown();
    return;
   }
  else {
    $(".heading-div, .subheading-div").delay(500).fadeIn();
    $(".red-stripe").delay(1000).slideDown(500, "linear");
    modal1.delay(500).slideUp();
    return;
  }
}
// modal 1 color correct, apply new color to all popout btns
function addColor1() {
  popoutBtns.css("background-color", "rgba(167, 0, 0, .7)");
}

// modal 2 color correct
function addColor2() {
  popoutBtns.css("background-color", "rgba(47, 79, 79)");
}
function slideModal2() {
  $(".heading-div, .subheading-div").addClass("display-none");
  $(".red-stripe").slideUp(500, "linear");
  modal1.fadeOut();
  modal3.fadeOut();
  modal2.delay(500).slideToggle();
  addColor2();
}

// modal 3 color correct function
function addColor3() {
  popoutBtns.css("background-color", "rgba(47, 79, 79)");
}
function slideModal3() {
  // modal3 slides into viewport
  modal3.toggleClass("sliding-modal");
  // landing page background text content displays as none
  $(".heading-div, .subheading-div").toggleClass("display-none");
  // red stripe design slides out of viewport
  $(".red-stripe").slideToggle();
  //change color on all popout buttons
  addColor3();
}
