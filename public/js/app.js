$(document).foundation();
  $('#medalUpdate').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/v1/medals/united-states',
      success: function(data) {
        console.log(data);
      }
    });
 });
