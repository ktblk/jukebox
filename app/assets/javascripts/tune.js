// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
  $.ajax({
    url: "https://stg-resque.hakuapp.com/albums.json",
    method: "GET",
    dataType: 'jsonp'

  })
  .done(function( data ) {
    $.each(data, function(index, value){
      console.log(index, value);


      // console.info(value);
    })
  });

})

$(function(){
  $.ajax({
      url: "https://stg-resque.hakuapp.com/songs?album_id=1",
      method: "GET",
      dataType: 'jsonp'

  })
  .done(function( data ) {
    $.each(data, function(index, value){
      console.log(index, value)

      // console.info(value);
    })
  });

})
