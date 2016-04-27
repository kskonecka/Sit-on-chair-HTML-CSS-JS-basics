document.addEventListener("DOMContentLoaded", function() {

var chairBoxes = document.querySelectorAll('.chair');
console.log(chairBoxes);

// in section with photos "chair clair & margerita" the strings dissapear
//mouseover and mouseout
for (var i = 0; i < chairBoxes.length; i++) {
  chairBoxes[i].addEventListener('mouseover', function(event){
    var greybackgroundParagraph = this.children[0];
    greybackgroundParagraph.style.visibility = "hidden";
  });
  chairBoxes[i].addEventListener('mouseout', function(event){
    var greybackgroundParagraph = this.children[0];
    greybackgroundParagraph.style.visibility = "visible";
  });
}

//after toggle-clicking on "about" a sub-menu appears/dissapears
  var menuItems = document.querySelectorAll('.menu>li');
  console.log(menuItems);

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function(event){
      var subMenuItems = this.children[0];
      if (subMenuItems !== undefined) {
        subMenuItems.classList.toggle('invisible');
      }
    });
  }

//basic slider gallery in the main section
var arrowLeft = document.querySelector(".arrowleft");
var arrowRight = document.querySelector(".arrowright");
var sliderImages = document.querySelectorAll('.div_blackchair ul li img');
console.log(sliderImages);
var visibleImageIndex = 0;

sliderImages[visibleImageIndex].classList.add("visible");

  arrowRight.addEventListener("click", function(event){
    sliderImages[visibleImageIndex].classList.remove('visible');
    visibleImageIndex++;
    if(visibleImageIndex >= sliderImages.length){
      visibleImageIndex = 0;
    }
    sliderImages[visibleImageIndex].classList.add('visible');
  });

  arrowLeft.addEventListener("click", function(event){
    sliderImages[visibleImageIndex].classList.remove('visible');
    visibleImageIndex--;
    if(visibleImageIndex < 0) {
      visibleImageIndex = sliderImages.length-1;
    }
    sliderImages[visibleImageIndex].classList.add('visible');
  });


//ORDER FORM

var orderForm = document.querySelector('.purchase_form');
console.log(orderForm);

//left-hand side of the form
var selects = orderForm.querySelectorAll("select");
var transportCheckbox = document.getElementById('transport');

//right hand side of the form
var panelLeftOptions = document.querySelector('.panel_left');
var panelRightPrices = document.querySelector('.panel_right');
var sum = document.querySelector('.sum strong');

//cost variables
var costs = {
  Clair: 600,
  Margarita: 550,
  Selena: 500,
  red: 25,
  black: 35,
  orange: 20,
  viscose: 20,
  leather: 50,
  transport: 50
}

//total cast that ends up in TOTAL field
var totalCost = {
  type: 0,
  color: 0,
  fabric: 0,
  transport: 0,
}

// prevents form from being sent
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

//chair type
  selects[0].addEventListener('change', function (event){
    panelLeftOptions.children[0].innerHTML = this.value;             //takes chair type value from select
    panelRightPrices.children[0].innerHTML = costs[this.value];      //updates chair type cost in form using costs object
    totalCost.type = costs[this.value];                              //updates type cost in totalCost object using chosen type value from costs object
    sum.innerHTML = orderSum();                                      //puts current sum into TOTAL row
  });

//chair color
  selects[1].addEventListener('change', function (event){
    panelLeftOptions.children[1].innerHTML = this.value;
    panelRightPrices.children[1].innerHTML = costs[this.value];
    totalCost.color = costs[this.value];
    sum.innerHTML = orderSum();
  });

//chair fabric
  selects[2].addEventListener('change', function (event){
    panelLeftOptions.children[2].innerHTML = this.value;
    panelRightPrices.children[2].innerHTML = costs[this.value];
    totalCost.fabric = costs[this.value];
    sum.innerHTML = orderSum();
  });

//checkbox
    transportCheckbox.addEventListener('click', function (event){
      if(transportCheckbox.checked){                                 //if checked
        panelLeftOptions.children[3].innerHTML = "Transport";        //puts "transport" in the orderform
        panelRightPrices.children[3].innerHTML = costs.transport;    //puts transport value from costs object into orderform
        totalCost.transport = costs.transport;                       //updates totalCost object with transport value from costs object
      } else {                                                       //else
        panelLeftOptions.children[3].innerHTML = "&nbsp";            //leaves transport row empty
        panelRightPrices.children[3].innerHTML = "&nbsp";
        totalCost.transport = 0;                                     //updates transport value in totalCost object
      }
      sum.innerHTML = orderSum();                                    //puts current sum into TOTAL row
    });

    // function that returns total cost for totalCost object
  function orderSum () {
    if (totalCost.type + totalCost.color + totalCost.fabric + totalCost.transport !== 0) {
      return totalCost.type + totalCost.color + totalCost.fabric + totalCost.transport + "&euro;";
    } else {
      return "";
    }
  }



}); //DOMContentLoaded
