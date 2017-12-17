function clearAll(){
  $("#output").html("");
  $("#searchTopic").val("");
}

function searchWiki(){
  var searchInput = $("#searchTopic").val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchInput + "&format=json&callback=?";
  var searchSet = {
    "contentType": "application/json; charset = utf-8",
    "dataType": "jsonp",
    "async": true,
    "crossDomain": true,
    "url":"https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchInput + "&format=json&callback=?",
    "method": "GET"
  }
  
  $.ajax(searchSet).done(function(response){
    for(var i=0; i<response[1].length; i++){
      var title = response[1][i];
      var desc = response[2][i];
      var uri = response[3][i];
      printResults(title, desc, uri);
    }
  });
  clearAll();
}

function printResults(title, description, uri, id) {
	$('#output').prepend(
		'<div class="row" id="' + id + '">' +
		'<h2>' + title + '</h2>' +
		'<p>' + description + '</p>' +
		'<p><a class="btn btn-default" target="_blank" href="' + uri + '" role="button">Read more...</a></p>' +
		'</div>'
	);
}