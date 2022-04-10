// Event Listener for 'pop-btns' animation
var popoutBtns = $('.pop-btns');
popoutBtns.click(function(event) {
  if ($(event.target).hasClass("pop-btn1")) {
    $(event.target).toggleClass("popout");
    $(".pop-btn2, .pop-btn3").removeClass("popout");
    slideModal1();
  } else if ($(event.target).hasClass("pop-btn2")) {
    $(event.target).toggleClass("popout");
    $(".pop-btn1, .pop-btn3").removeClass("popout");
    slideModal2();
  } else if ($(event.target).hasClass("pop-btn3")) {
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
  } else {
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
  } else {
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
  } else {
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

  function subtotalCalc() {
    const subtotal = document.getElementById("subtotal");
    let raptorPrice = 600 * raptorBikeCount;
    let venusPrice = 650 * venusBikeCount;
    let price = "$" + (raptorPrice + venusPrice);

    if (raptorPrice > 0 || venusPrice > 0) {
      subtotal.innerHTML= price;
    }
    else if (raptorPrice === 0 && venusPrice === 0)
    {
      subtotal.innerHTML= 0;
    }
  }
function openCart() {
  $(".cart-modal").slideToggle(700);
  subtotalCalc();
}

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

$(".buy-btn").on("click", function(event) {
  if ($(event.target).hasClass("buy-btnRaptor")) {
    // remove Empty Cart message
    $(".empty-cart-msg").fadeOut();
    buyRaptor();
    return;
  } else if ($(event.target).hasClass("buy-btnVenus")) {
    // remove Empty Cart message
    $(".empty-cart-msg").fadeOut();
    buyVenus();
    return;
  }
})

//functions for click listener for Raptor and Venus btns
function buyRaptor() {
  var product = {
    name: "Raptor",
    price: "$600.00",
    product_photo: "images/product-bike1.jpg"
  }
  let newCartItem = document.createElement("DIV");
  let newDiv1 = document.createElement("DIV");
  let newDiv2 = document.createElement("DIV");
  let photo = product.product_photo;
  let productImg = document.createElement("IMG");
  let itemName = document.createElement("P")
  let itemPrice = document.createElement("P");
  let itemQuantity = document.createElement("P");
  let deleteBtn = document.createElement("DIV");

  productImg.setAttribute("src", photo);
  newCartItem.setAttribute("class", "cart-item");
  newCartItem.setAttribute("id", "product2Item");
  itemName.setAttribute("class", "product-name");
  itemPrice.setAttribute("class", "product-price");
  productImg.setAttribute("class", "cart-product");
  itemQuantity.setAttribute("id", "product2Qty");
  deleteBtn.setAttribute("class", "delete-btn raptorDelete");
  deleteBtn.setAttribute("id", "deleteFromCart");

  itemName.innerHTML = product.name;
  itemPrice.innerHTML = product.price;
  deleteBtn.innerHTML = "X";

  newDiv1.appendChild(productImg);
  newDiv2.appendChild(itemName);
  newDiv2.appendChild(itemPrice);
  newDiv2.appendChild(itemQuantity);

  newCartItem.appendChild(newDiv1);
  newCartItem.appendChild(newDiv2);
  newCartItem.appendChild(deleteBtn);

  document.getElementById("Cart-Modal").appendChild(newCartItem);
  subtotalCalc();
  $(".buy-btnRaptor").removeClass("buy-btnRaptor");
}
//Counter for cart quantity - Raptor Product
var raptorBikeCount = 0;
var raptorBtn = document.getElementById("buy-btnRaptor");
var counter = document.getElementById("total-quantity");
raptorBtn.onclick = function() {
  raptorBikeCount++;
  counter.innerHTML = raptorBikeCount + venusBikeCount;
  document.getElementById("product2Qty").innerHTML= "Qty: " + raptorBikeCount;
}

// Buy Button Actions for Venus Bike
function buyVenus() {
  const product = {
    name: "Venus",
    price: "$650.00",
    product_photo: "images/giant-bike1.jpg"
  }
  let newCartItem = document.createElement("DIV");
  let newDiv1 = document.createElement("DIV");
  let newDiv2 = document.createElement("DIV");
  let photo = product.product_photo;
  let productImg = document.createElement("IMG");
  let itemName = document.createElement("P")
  let itemPrice = document.createElement("P");
  let itemQuantity = document.createElement("P");
  let deleteBtn = document.createElement("DIV");

  productImg.setAttribute("src", photo);
  newCartItem.setAttribute("class", "cart-item");
  newCartItem.setAttribute("id", "product3Item");
  itemName.setAttribute("class", "product-name");
  itemPrice.setAttribute("class", "product-price");
  productImg.setAttribute("class", "cart-product");
  itemQuantity.setAttribute("id", "product3Qty");
  deleteBtn.setAttribute("class", "delete-btn venusDelete");
  deleteBtn.setAttribute("id", "deleteFromCart");


  itemName.innerHTML = product.name;
  itemPrice.innerHTML = product.price;
  deleteBtn.innerHTML = "X";

  newDiv1.appendChild(productImg);
  newDiv2.appendChild(itemName);
  newDiv2.appendChild(itemPrice);
  newDiv2.appendChild(itemQuantity);

  newCartItem.appendChild(newDiv1);
  newCartItem.appendChild(newDiv2);
  newCartItem.appendChild(deleteBtn);

  document.getElementById("Cart-Modal").appendChild(newCartItem);
  subtotalCalc();
  $(".buy-btnVenus").removeClass("buy-btnVenus");
}
//Counter for cart quantity - Venus Product
var venusBikeCount = 0;
var venusBtn = document.getElementById("buy-btnVenus");
venusBtn.onclick = function() {
  venusBikeCount++;
  counter.innerHTML = venusBikeCount + raptorBikeCount;
  console.log(venusBikeCount);
  document.getElementById("product3Qty").innerHTML= "Qty: " + venusBikeCount;
}
//function for Cart Msg reappear
function cartMsg() {
  //if Cart Modal doesn't have child with class .cart-item, then fadeIn the 'empty cart message'
  if(!$('#Cart-Modal').find('.cart-item').length == 1) {
    $(".empty-cart-msg").fadeIn();
    subtotalCalc();
    return;
  }
  else {
    return;
  }
}
//Click event for removing cart item with delete btn
$(document).on("click", "#deleteFromCart", function(e) {
  //removing Raptor Bike Product
  if ($(event.target).hasClass("raptorDelete")) {
    //removing the entire cart item for this product, by ID
    document.getElementById("product2Item").remove();
    //make the buy button from buyRaptor() addable again
    $("#buy-btnRaptor").addClass("buy-btnRaptor");
    //resetting the subtotal amount
    subtotalCalc();
    //subtract Raptor Product counter from total counter clicks
    counter.innerHTML = (venusBikeCount + raptorBikeCount) - raptorBikeCount;
    //reset counter for Raptor Product
    raptorBikeCount=0;
    cartMsg();
  }
  else if ($(event.target).hasClass("venusDelete")) {
    //removing the entire cart item for this product, by ID
    document.getElementById("product3Item").remove();
    //make the buy button from buyVenus() addable again
    $("#buy-btnVenus").addClass("buy-btnVenus");
    //resetting the subtotal amount
    subtotalCalc();
    //subtract Raptor Product counter from total counter clicks
    counter.innerHTML = (venusBikeCount + raptorBikeCount) - venusBikeCount;
    //reset counter for Venus Product
    venusBikeCount=0;
    cartMsg();
}
});

//Product Swaps Listener
 function swapProduct1() {
   let mavImg = document.getElementById("Maverick-Img");
   if (mavImg.getAttribute("src") === "images/scott-bike1.jpg") {
   mavImg.setAttribute("src", "images/scott-bike2.jpg");
   }
   else if (mavImg.getAttribute("src")=== "images/scott-bike2.jpg") {
     mavImg.setAttribute("src", "images/scott-bike3.jpg");
   }
   else if (mavImg.getAttribute("src")=== "images/scott-bike3.jpg") {
     mavImg.setAttribute("src", "images/scott-bike1.jpg");
   }
};

function swapProduct2() {
  let rapImg = document.getElementById("Raptor-Img");
  if (rapImg.getAttribute("src") === "images/product-bike1.jpg") {
  rapImg.setAttribute("src", "images/product-bike2.jpg");
  }
  else if (rapImg.getAttribute("src")=== "images/product-bike2.jpg") {
    rapImg.setAttribute("src", "images/product-bike3.jpg");
  }
  else if (rapImg.getAttribute("src")=== "images/product-bike3.jpg") {
    rapImg.setAttribute("src", "images/product-bike1.jpg");
  }
};


function swapProduct3() {
  let venImg = document.getElementById("Venus-Img");
  if (venImg.getAttribute("src") === "images/giant-bike1.jpg") {
  venImg.setAttribute("src", "images/giant-bike2.jpg");
  }
  else if (venImg.getAttribute("src")=== "images/giant-bike2.jpg") {
    venImg.setAttribute("src", "images/giant-bike3.jpg");
  }
  else if (venImg.getAttribute("src")=== "images/giant-bike3.jpg") {
    venImg.setAttribute("src", "images/giant-bike1.jpg");
  }
};
