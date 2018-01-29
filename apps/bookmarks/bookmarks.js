// Add submit listener for Bookmarks Form
document.getElementById("bmForm").addEventListener("submit", bmSubmit);
// Add Bookmark function
function bmSubmit(pd){
  var bmName = document.getElementById("bmName").value;
  var bmUrl = document.getElementById("bmUrl").value;
  // Check for valid input
  if(!bmValidate(bmName, bmUrl)){
    return false;
  }

  var bookmark = {
    name: bmName,
    url: bmUrl
  }
  // Create new array of objects
  // if there's no data in local storage
  // otherwise, just add data to it
  // pd.preventDefault() - prevent browser
  // from refreshing the page
  if(localStorage.getItem("bookmarks") === null){
    var bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  else {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  document.getElementById("bmForm").reset();
  bookmarksDisplay();
  pd.preventDefault();
}
// Delete bookmark from the list and local storage
// Takes in url argument from the bookmark's
// button that is clicked
// Itterate trough the local storage
// and delete matching data
function bmDelete(url){
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  for(var i = 0; i < bookmarks.length; i++){
    if(bookmarks[i].url == url){
      bookmarks.splice(i, 1);
    }
  }
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  bookmarksDisplay()
}

// Display local storage data
// Itterate through the local storage
// and display each bookmark
function bookmarksDisplay(){
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  var bmDisplay = document.getElementById("bmDisplay");
  bmDisplay.innerHTML = "";

  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;
    console.log(url);
    bmDisplay.innerHTML +=

      '<div class="col-10">' +
        "<h5>" + name + "</h5>" + 
      "</div>" +
      '<div class="col-1 text-right">' +
      ' <a class="btn btn-primary" target="_blank" href="https://'+url+'">Visit</a> ' +
      "</div>" +
      '<div class="col-1 text-right">' +
      " <a onclick='bmDelete(\""+url+"\")' class='btn btn-danger' href='#'>Remove</a> " +
      "</div>";
                          }
}
// Validate the input
// Alert if input fields are empty
// Alert if url is not valid
// e.g. asdsadsasdasdad
function bmValidate(bmName, bmUrl){
  if(!bmName || !bmUrl){
    alert('Please fill in the form.');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!bmUrl.match(regex)){
    alert('Please use a valid URL');
    return false;
  }
  return true;
}
