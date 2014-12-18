function fetchData(dataType) {
	var data;
	$.ajax({
  		url: "http://localhost:8080/scoreboard/" + dataType,
  		dataType: 'json',
  		async: false,
  		success: function(_data) {
  			data = _data;
  		}
  	});
	return data;
}
