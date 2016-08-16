//Make Foundation load
$(document).foundation();
  $(document).ready(function() {
    $.ajax({
      type: 'GET',
      url: '/api/v1/medals',
      success: function(data) {
        allCountries(data);
      }
    }); //end ajax call
    function allCountries(data) {
      var outputs = ['country_name', 'gold_count', 'silver_count', 'bronze_count', 'place', 'total_count'];
      for (i = 0; i < data.length; i++) {
        htmlOutput = ' <tr>';
        outputs.forEach(function(output) {
          htmlOutput += '<td>' + data[i][output] + '</td>';
        })
        htmlOutput += '</tr>';
        $('tbody').append(htmlOutput);
      }
    }//end output function
  });
