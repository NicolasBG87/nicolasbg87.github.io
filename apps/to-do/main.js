// PENDING ITEMS PLACEHOLDER
// <div class='container list'><p>" + pendItems + "<span class='pull-right'><i class='fa fa-trash fa-2x remove'></i></span><span class='pull-right'><i class='fa fa-check-circle fa-2x completed'></i></span></p></div>

// COMPLETED ITEMS PLACEHOLDER
// <div class='container list'><p>" + compItems + "<span class='pull-right'><i class='fa fa-times-circle fa-2x delete'></i></span></p></div>

/*
# USER INPUTS TEXT
# USER CLICKS ADD BUTTON
# STORE DATA TO PENDING ITEMS
# STORE DATA TO LOCAL STORAGE

# USER CLICKS COMPLETED BUTTON
# STORE DATA TO COMPLETED ITEMS
# STORE DATA TO LOCAL STORAGE

# USER CLICKS TRASH BUTTON
# REMOVE ITEM

# USER CLICKS CROSS BUTTON
# REMOVE ITEM
*/
displayPending();

document.getElementById("add").addEventListener("click", addData);
document.getElementsByClassName("remove").addEventListener("click", removeData);

function addData() {
  let userInput = item.value;
  if(localStorage.getItem("pending") === null) {
    let pendingItems = [];
    pendingItems.push(userInput);
    localStorage.setItem("pending", JSON.stringify(pendingItems));
  } else {
    let pendingItems = JSON.parse(localStorage.getItem("pending"));
    pendingItems.push(userInput);
    localStorage.setItem("pending", JSON.stringify(pendingItems));
  }
  item.value = "";
  displayPending();

}

function displayPending() {
  let sItems = JSON.parse(localStorage.getItem("pending"));
  document.getElementById("pending-items").innerHTML = "";

  if(localStorage.getItem("pending")){
    for (let i = 0; i < sItems.length; i++){
      document.getElementById("pending-items").innerHTML += "<div class='container list'><p>" + sItems[i] + "<span class='pull-right'><i class='fa fa-trash fa-2x remove' id='" + i + "'></i></span><span class='pull-right'><i class='fa fa-check-circle fa-2x' id='completed'></i></span></p></div>";
    }
  }
}
