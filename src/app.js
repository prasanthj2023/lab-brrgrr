// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  let cheese = document.getElementById("cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";

  } else {
    cheese.style.display = "none"
  }
}

function renderTomatoes() {
  let Tomatoe = document.getElementById("tomato");
  if (state.Tomatoes) {
    Tomatoe.style.display = "inherit";

  } else {
    Tomatoe.style.display = "none"
  }
}

function renderOnions() {
  let onion = document.getElementById('onion')
  if (state.Onions) {
    onion.style.display = 'inherit';
  } else {
    onion.style.display = 'none'
  }

}

function renderLettuce() {
  let lettuce = document.getElementById('lettuce')
  if (state.Lettuce) {
    lettuce.style.display = 'inherit';
  } else {
    lettuce.style.display = 'none'
  }

}


document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll()
}

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll()
}

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions ;
  renderAll()
}

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce ;
  renderAll()
}


//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  let p = document.getElementsByClassName('btn-patty')[0]
  if (state.Patty){
    p.classList.add("active")

  }else{
    p.classList.remove("active")
  }
  let c = document.getElementsByClassName('btn-cheese')[0]
  if (state.Cheese){
    c.classList.add("active")

  }else{
    c.classList.remove("active")
  }
  let t = document.getElementsByClassName('btn-tomatoes')[0]
  if (state.Tomatoes){
    t.classList.add("active")

  }else{
    t.classList.remove("active")
  }
  let o = document.getElementsByClassName('btn-onions')[0]
  if (state.Onions){
    o.classList.add("active")

  }else{
    o.classList.remove("active")
  }
  let l = document.getElementsByClassName('btn-lettuce')[0]
  if (state.Lettuce){
    l.classList.add("active")

  }else{
    l.classList.remove("active")
  }

}
//Challenge 2 - Render only the items selected in the ingredients board based on the state
var menu = document.getElementsByClassName("items")

function renderIngredientsBoard(){

  if (state.Patty){
    menu[0].textContent = "Patty"
  }else{
    menu[0].textContent = ' '
  }
  if (state.Cheese){
    menu[1].textContent = "Cheese"
  }else{
    menu[1].textContent = ' '
  }
  if (state.Tomatoes){
    menu[2].textContent = "Tomatoes"
  }else{
    menu[2].textContent = ' '
  }
  if (state.Onions){
    menu[3].textContent = "Onions"
  }else{
    menu[3].textContent = ' '
  }
  if (state.Lettuce){
    menu[4].textContent = "Lettuce"
  }else{
    menu[4].textContent = ' '
  }
}


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

var price = document.getElementsByClassName("price-details")[0]
function renderPrice(){
  var sum = 0
  if (state.Patty){
    sum += ingredients.Patty
    price.textContent = sum
  }
  if (state.Cheese){
    sum += ingredients.Cheese
    price.textContent = sum
  }
  if (state.Tomatoes){
    sum += ingredients.Tomatoes
    price.textContent = sum
  }
  if (state.Onions){
    sum += ingredients.Onions
    price.textContent = sum
  }
  if (state.Lettuce){
    sum += ingredients.Lettuce
    price.textContent = sum
  }
}