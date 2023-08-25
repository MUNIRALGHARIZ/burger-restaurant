let menu_icon = document.querySelector('.fa-bars');
let menu = document.querySelector('.main-header .container nav');
let drinksBtn = document.getElementById('drinks-btn');
let foodsBtn = document.getElementById('foods-btn');
let sweetsBtn = document.getElementById('sweets-btn');
let sweet_sec = document.getElementById('sweets')
let food_sec = document.getElementById('foods');
let drinks_sec = document.getElementById('drinks');

// when user click in menu icon
menu_icon.addEventListener("click",_=>{
    menu.classList.toggle('active');
    menu_icon.classList.toggle('fa-xmark')
})

//when user click in drink button
drinksBtn.addEventListener("click", _ => {
  sweet_sec.classList.add("d-none");
  drinks_sec.classList.remove("d-none");
  food_sec.classList.add("d-none");
  drinksBtn.classList.add('main-btn');
  foodsBtn.classList.remove('main-btn');
  sweetsBtn.classList.remove('main-btn');
  });
//when user click in food button
foodsBtn.addEventListener("click", _ => {
  sweet_sec.classList.add("d-none");
  drinks_sec.classList.add("d-none");
  food_sec.classList.remove("d-none");
  drinksBtn.classList.remove('main-btn');
  foodsBtn.classList.add('main-btn');
  sweetsBtn.classList.remove('main-btn');
  });

  // when user click on the sweets button
  sweetsBtn.addEventListener("click", _ => {
    sweet_sec.classList.remove("d-none");
    drinks_sec.classList.add("d-none");
    food_sec.classList.add("d-none");
    drinksBtn.classList.remove('main-btn');
    foodsBtn.classList.remove('main-btn');
    sweetsBtn.classList.add('main-btn');
  });


