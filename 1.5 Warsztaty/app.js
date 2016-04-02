document.addEventListener("DOMContentLoaded", function() {

var chairBoxes = document.querySelectorAll('.chair');
console.log(chairBoxes);

//zadanie 2, po najechaniu blok z nazwa schowany
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

//zadanie 1
  var menuItems = document.querySelectorAll('.menu>li');
  console.log(menuItems);

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('mouseover', function(event){
      var subMenuItems = this.children[0];
      if (subMenuItems !== undefined) {
        subMenuItems.style.display = 'block';
        subMenuItems.addEventListener('mouseout', function (event){
          this.style.display = 'none';
        });
      }
    });
  }

//zadanie 3 slider
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

//zadanie*

var orderForm = document.querySelector('.purchase_form');
console.log(orderForm);

//lewa strona
var selects = orderForm.querySelectorAll("select");
console.log(selects);
var transportCheckbox = document.getElementById('transport');
console.log(transportCheckbox);

//prawa strona
var panelLeftOptions = document.querySelector('.panel_left');
var panelRightPrices = document.querySelector('.panel_right');
var sum = document.querySelector('.sum strong');
sum.innerHTML=""; //pokazuje sie zero!
console.log(sum);


var price = {
  Clair: 2400,
  Margarita: 2200,
  Selena: 2000,
  czerwony: 100,
  czarny: 150,
  zielony: 50,
  tkanina: 80,
  skora: 250,
}

var totalCost = {
  type: 0,
  color: 0,
  fabric: 0,
  transport: 0,
}

//zaczynamy od transportu
  transportCheckbox.addEventListener('click', function (event){
    if(transportCheckbox.checked){
      panelLeftOptions.children[3].innerHTML = "Transport";
      panelRightPrices.children[3].innerHTML = this.dataset.transportPrice;
      this.dataset.transportPrice = totalCost.transport;
      return totalCost.transport;
    }
    else if (transportCheckbox.checked === false) {
      panelLeftOptions.children[3].innerHTML = "";
      panelRightPrices.children[3].innerHTML = "";
      return totalCost.transport = 0;

    }
  });//jesli klikam w checkbox wiecej razy pojawia sie cena 0 a nie 200

//rodzaj krzesla
  selects[0].addEventListener('change', function (event){
    panelLeftOptions.children[0].innerHTML = this.value;
    panelRightPrices.children[0].innerHTML = price[this.value];
    price[this.value] = totalCost.type;
    sum.innerHTML = totalCost.type;
  });
  //po kilku kliknieciach cena wraca na 0, dlaczego?

//kolor
  selects[1].addEventListener('change', function (event){
    panelLeftOptions.children[1].innerHTML = this.value;
    panelRightPrices.children[1].innerHTML = price[this.value];
    totalCost.color = price[this.value];
    return totalCost.color;
  });

//fabric
  selects[2].addEventListener('change', function (event){
    panelLeftOptions.children[2].innerHTML = this.value;
    panelRightPrices.children[2].innerHTML = price[this.value];
    totalCost.fabric = price[this.value];
    return totalCost.fabric;
  });

  sum.innerHTML = totalCost.transport + totalCost.type + totalCost.color + totalCost.fabric;
  //jak ruszyc te sume? wyswietla sie caly czas zero i nie wiem dlaczego

});
