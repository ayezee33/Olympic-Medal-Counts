//Make Foundation load
$(document).foundation();
//Ajax call
  $('#medalUpdate').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/api/v1/medals/united-states',
      success: function(data) {
        output(data);
      }
    }); //end ajax call
    function output(data) {
      var country = data.country_name
      var gold    = data.gold_count
      var silver  = data.silver_count
      var bronze  = data.bronze_count
      var place   = data.place
      var total   = data.total_count

    $('#output').html('<div class="callout large">' +
      '<h3>' + country + '</h3>' +
      '<p>Gold Count: ' + gold + '</p>' +
      '<p>Silver Count: ' + silver + '</p>' +
      '<p>Bronze Count: ' + bronze + '</p>' +
      '<p>Place: ' + place + '</p>' +
      '<p>Total Medals: ' + total + '</p>' +
      '</div>');
    }//end output function
  });
