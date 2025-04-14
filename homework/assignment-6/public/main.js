$(document).ready(function(){
  $('#queryForm').submit(function(e){
    e.preventDefault();
    const queryVal = $('#query').val();

    $.ajax({
      url: '/lookup',
      method: 'POST',
      data: { query: queryVal },
      success: function(data){
        $('#result').empty();

        if (data.length > 0) {
          data.forEach(function(item){
            $('#result').append('<p>ID: ' + item.name + ' | Data: ' + item.description + '</p>');
          });
        } else {
          $('#result').append('<p>No results found</p>');
        }
      },
      error: function(err){
        $('#result').html('<p>Error occurred while fetching data</p>');
      }
    });
  });
});
