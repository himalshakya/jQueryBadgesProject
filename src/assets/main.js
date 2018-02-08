$(function() {

  // your code will go here
	$.ajax({
    url: 'https://www.codeschool.com/users/yeti8848.json',
    dataType: 'jsonp',
    success: function(response) {
    	var completedCourse = response.courses.completed;
    	var completedLength = completedCourse.length;

    	var badgeDiv = $('#badges');
    	for (var i = 0; i < completedLength; i++){
    		var x = $('<div class="course"></div>')
    			.append('<h3>'+completedCourse[i].title+'</h3>')
    			.append('<img src="'+completedCourse[i].badge+'">');
    		y = x.wrap('<a href="'+completedCourse[i].url+'"></a>');
    		badgeDiv.append(y);
    	}
    }
  });
});
