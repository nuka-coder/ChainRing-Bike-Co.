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

// Sliding Modal Animations
   var modal1 = $("#Product-Modal1");
   var modal2 = $("#Product-Modal2");
   var modal3 = $("#Product-Modal3");
// Modal 1
   function slideModal1() {
     isModal1Hidden();
     // display none for other modals
     modal2.fadeOut();
     modal3.fadeOut();
     addColor1();
     };
   // check if modal is hidden to display or hide landing text
   function isModal1Hidden() {
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
// Modal 2
   function slideModal2() {
     isModal2Hidden();
     // display none for other modals
     modal1.fadeOut();
     modal3.fadeOut();
     };
   // check if modal is hidden to display or hide landing text
   function isModal2Hidden() {
     if (modal2.is(":hidden")) {
       $(".heading-div, .subheading-div").delay(200).fadeOut();
       $(".red-stripe").slideUp(500, "linear");
       modal2.slideDown();
       addColor2();
       return;
      }
     else {
       $(".heading-div, .subheading-div").delay(500).fadeIn();
       $(".red-stripe").delay(1000).slideDown(500, "linear");
       modal2.delay(500).slideUp();
       addColor1();
       return;
     }
   }
   // modal 2 color correct
   function addColor2() {
     popoutBtns.css("background-color", "rgba(47, 79, 79)");
   }
//Modal 3
   function slideModal3() {
     isModal3Hidden();
     // display none for other modals
     modal1.fadeOut();
     modal2.fadeOut();
     };
   // check if modal is hidden to display or hide landing text
   function isModal3Hidden() {
     if (modal3.is(":hidden")) {
       $(".heading-div, .subheading-div").delay(200).fadeOut();
       $(".red-stripe").slideUp(500, "linear");
       modal3.slideDown();
       addColor3();
       return;
      }
     else {
       $(".heading-div, .subheading-div").delay(500).fadeIn();
       $(".red-stripe").delay(1000).slideDown(500, "linear");
       modal3.delay(500).slideUp();
       addColor1();
       return;
     }
   }
   // modal 3 color correct function
   function addColor3() {
     popoutBtns.css("background-color", "rgb(128, 165, 32)");
   }

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

// Buy Now
const product1 = {
  name: "Maverick",
  price: "$500.00",
  product_photo: "images/bike product generic.jpg",
}

// When 'buy-now' btn is clicked
// 1. Add Product Img, Product Name, and Price to Cart Modal

$(".buy-btn").on("click", function(event){
  if ($(event.target).hasClass("buy-btnRaptor")) {
    buyRaptor();
    return;
  }
  else if ($(event.target).hasClass("buy-btnVenus")) {
    buyVenus();
    return;
  }
})

//functions for click listener for Raptor and Venus btns
function buyRaptor() {
  var product = {
    name: "Raptor",
    price: "$600.00",
    product_photo: "images/product bike 1.jpg"
  }

let newCartItem =  document.createElement("DIV");
let newDiv1 = document.createElement("DIV");
let newDiv2 = document.createElement("DIV");
let photo = product.product_photo;
let productImg = document.createElement("IMG");
let itemName = document.createElement("P")
let itemPrice = document.createElement("P");

productImg.setAttribute("src", photo);
newCartItem.setAttribute("class", "cart-item");
itemName.setAttribute("class", "product-name");
itemPrice.setAttribute("class", "product-price");
productImg.setAttribute("class", "cart-product");

itemName.innerHTML= product.name;
itemPrice.innerHTML= product.price;

newDiv1.appendChild(productImg);
newDiv2.appendChild(itemName);
newDiv2.appendChild(itemPrice);

newCartItem.appendChild(newDiv1);
newCartItem.appendChild(newDiv2);

var cartModal = document.getElementById("Cart-Modal");

cartModal.appendChild(newCartItem);
}

function buyVenus() {
  const product3 = {
    name: "Venus",
    price: "$650.00",
    image: "images/product bike 1.jpg"
  }

}


// var form = document.querySelector("#form");
// //declare variable for textarea
// var noteInput = document.getElementById("note");
// //declare variable for allNotes section
// var allNotes = document.getElementById("allNotes");
//
// //add eventListener to form submission
// form.addEventListener("submit", noteSubmit);
//
// //create function noteSubmit
// function noteSubmit() {
// //create div element to hold new note submissions
// var noteHolder = document.createElement("DIV");
// //assign class to noteHolder
// noteHolder.setAttribute("class", "note-holder");
// //create p element to hold note value
// var noteText = document.createElement("P");
// //set attribute for noteText
// noteText.setAttribute("class", "note-text");
// //set noteText innerHTML
// noteText.innerHTML= noteInput.value;
// //append noteText to noteHolder
// noteHolder.appendChild(noteText);
// //append the above the allNotes div in html
// allNotes.appendChild(noteHolder);
//
// //SUBMIT BUTTON
// $(".submit-btn").on("mouseover", function() {
//   $(this).css("color", "white");
// })
//
// //MODAL BUTTON
// //create button element
// var modalBtn = document.createElement("BUTTON");
// //set innerHTML of modal
// modalBtn.innerHTML="View Detail";
// //assign class to modal
// modalBtn.setAttribute("class", "modalBtn");
// //append modal to noteHolder
// noteHolder.appendChild(modalBtn);
//
// //CREATE MODAL
// var modal = document.createElement("DIV");
// var modalText = document.createElement("P");
// modalText.innerHTML = noteInput.value;
// modal.appendChild(modalText);
// modal.setAttribute("class", "modal");
// allNotes.appendChild(modal);
//
// //DELETE MODAL
// var deleteModal = document.createElement("BUTTON");
// //set innerHTML for deleteModal
// deleteModal.innerHTML = "CLOSE";
// //append deleteBtn to modal
// modal.appendChild(deleteModal);
// //assign class to deleteBtn
// deleteModal.setAttribute("class", "close-modal");
// //addEventListener to deleteBtn
// deleteModal.addEventListener("click", function() {
//   modal.style.display="none";
//   deleteModal.style.display="none";
// })
// //CLOSE MODAL ON WINDOW CLICK
//   window.onclick = function(event) {
//     if (event.target != modalBtn) {
//   modal.style.display="none";
//   }
//   else {
//     modal.style.display="block";
//     deleteModal.style.display="block";
//   }
//   }
//
//
// //CLICK FOR MODAL BUTTON
// modalBtn.onclick = function() {
//   modal.style.visibility="visible";
// };
//
// //CREATE DELETE BUTTON
// var deleteBtn = document.createElement("BUTTON");
// //set innerHTML for deleteBtn
// deleteBtn.innerHTML = "X";
// //append deleteBtn to allNotes
// allNotes.appendChild(deleteBtn);
// //assign class to deleteBtn
// deleteBtn.setAttribute("class", "delete-btn");
// //addEventListener to deleteBtn
// deleteBtn.addEventListener("click", function() {
//   noteHolder.style.display="none";
//   deleteBtn.style.display="none";
// })
//
// //clear textarea
// noteInput.value = "";
//
// //prevent page refresh
// event.preventDefault();
// }
