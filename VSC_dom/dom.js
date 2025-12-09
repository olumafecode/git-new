const $h2
$h2.textContent = "Ken's To Do list"
const $list = document.querySelector("#my-list")
function addItem(text) {
  let $Item = document.createElement("li")
  let $Items = $list.getElementsByTagname()
  $Item.textContent = text
  $list.append($Item)
}
addItem("Eat")
function removeItem(index) {
    $items[index].remove()
}