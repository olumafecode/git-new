const $list = document.querySelector("#my-list");
const $h2 = document.querySelector("h2");
const $addButton = document.querySelector("#addBtn");
$addButton.addEventListener("click", addItem);
$h2.textContent = "Ken's To Do list"
const $span = document.querySelector("span");

let $buttons = $list.getElementsByTagName("button");
for (const button of $buttons) {
    button.addEventListener("click", removeItem)
}

function update() {
  const num = $list.getElementsByTagName("li").length;  
    $span.textContent = `${num} left`;
    console.log("Number of items left",num);
    if (num === 0) {
        alert("Nice one Ken!");
    }
}
  function addItem(text) {
  let $Item = document.createElement("li");
  //let $Items = $list.getElementsByTagName("li");
  $Item.textContent = text;
  
  // create button
  let $button = document.createElement("button");
  $button.textContent = "X";
  $button.addEventListener("click", removeItem);
  // Add the button to the li
  $Item.appendChild($button);
  // Add the strike event to the li
  $Item.addEventListener("click", strikeItem);
  $list.append($Item);
  update();
}
addItem("Eat");

//function removeItem(index) {
    //const $Items = $list.getElementsByTagName("li");
    //$Items[index].remove();
function removeItem(event) {  
  event.stopPropagation(); // Prevent the click from bubbling up to the li
  this.parentElement.remove()  
  update();
}
//function strikeItem(index) {
function strikeItem() {  
    const $Items = $list.getElementsByTagName("li");
    //$Items[index].setAttribute("class","strike");
    //this.setAttribute("class","strike");
    this.classList.toggle("strike");
    update()
}
//strikeItem(2)
const $Items = $list.getElementsByTagName("li");
for ( const Item of $Items) {
    Item.addEventListener("click", strikeItem);
    const button = Item.querySelector("button");
  if (button) {
    button.addEventListener("click", removeItem);
  }
}
update(); // InitiL CALL TO UPDATE COUNT ON PAGE LOAD