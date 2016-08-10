$(document).foundation();
  $('#medalUpdate').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      type: 'GET',
      jsonp: 'jsonp',
      contentType: 'application/json',
      url: 'http://www.medalbot.com/api/v1/medals/united-states',
      dataType: 'jsonp',
      success: function(data) {
        console.log(data);
      }
    });
 });
