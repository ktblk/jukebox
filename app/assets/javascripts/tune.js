function initBout(){
  $('#boutique').boutique({
    container_width:	700,
    front_img_width:	170,
    front_img_height:	160,
    behind_opacity:	1,
    back_opacity:	1,
    hovergrowth:	0.0,
    speed:	800,
    behind_size:	1,
      back_size:	1,
    // move_on_click: true;
  });
}

function htmlFill(value){
  return `<li>
     <div class="album-art">
       <img class="img-responsive" src="${value.cover_photo_url}" alt="" />
     </div>

     <div class="album-body">
       <h4 id="songtitle">${value.name}</h4>
       <p id="artist">
         ${value.artist_name}
       </p>
     </div>

   </li>`;

}

$(function(){

  $.ajax({
    url: "https://stg-resque.hakuapp.com/albums.json",
    method: "GET",
    dataType: 'jsonp'

  })
  .done(function( data ) {
    $.each(data, function(index, value){
      console.info(value.id);

      $('#boutique').append(htmlFill(value));
    })
  })
  .success(function(){
    initBout();
  });

})
//
// $(function(){
//   $.ajax({
//       url: "https://stg-resque.hakuapp.com/songs?album_id=1",
//       method: "GET",
//       dataType: 'jsonp'
//
//   })
//   .done(function( data ) {
//     $.each(data, function(index, value){
//       console.log(index, value)
//     })
//   });
//
// })
// $("button").on("click", function(){
//     $("button").css("color", "#00698C");
// });

// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
// });
