$(document).ready(function() {

  $("#add").on("click", function() {

    $("#pending-items").html("<div class='container list'><p>" + item.value + "<span class='pull-right'><i class='fa fa-trash fa-2x remove'></i></span><span class='pull-right'><i class='fa fa-check-circle fa-2x completed'></i></span></p></div>");

    storeData();
    update();
  });

  function update() {
    item.value = "";
  }

  function storeData() {
    let data = {
      pending: [],
      completed: []
    }
    item.value.push(data.pending);
    localStorage.setItem("pending", JSON.stringify(pending));
  }


});