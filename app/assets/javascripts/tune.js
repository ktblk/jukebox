function initCarousel(){
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
    initCarousel();
  });


  $(document).on("click", "#star a", function(event) {
    event.preventDefault();
    var star = $(this).find('.fa-star');
    console.log(star);
    if (star.hasClass("yellow-star")) {
      star.removeClass("yellow-star");
    }else {
      star.addClass("yellow-star");
    }
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip({
      container: 'body',
      trigger: 'hover'
  })
})

})



// function tableFill(value){
//   return `<tr>
//         <td class="col-sm-1" id="tracknumber" ><div id="num">${value.song_order}</div></td>
//         <td class="col-sm-1" id="star"><a href="" data-placement="top" title="MARK AS FAVORITE" data-toggle="tooltip" ><i class="fa fa-star" aria-hidden="true" style="color: #DDDDDD; font-size: 18px"></i></a></td>
//         <td class="col-sm-3" id="songname">${value.song_name}</td>`
//         if (${value.song_label} != null){
//           `<td class="col-sm-1" id="category1"><div id="explicit">${value.song_label[0]}</div></td>`
//         } else if (${value.song_label.length} == 2}) {
//           `<td class="col-sm-7" id="category2"><div id="type">${value.song_label[1]}</div></td>`
//         }
//         `<td class="col-sm-1" id="songtime">${value.song_duration}</td>
//       </tr>`;
// }

$(function(){
  $.ajax({
      url: "https://stg-resque.hakuapp.com/songs?album_id=1",
      method: "GET",
      dataType: 'jsonp'

  })
  .done(function( data ) {
    $.each(data, function(index, value){
      console.log(value);
      // $('#paneltable').append(tableFill(value));
    })
  });

})

// $(function(){
//   $.ajax({
//       url: "https://stg-resque.hakuapp.com/songs?album_id=2",
//       method: "GET",
//       dataType: 'jsonp'
//
//   })
//   .done(function( data ) {
//     $.each(data, function(index, value){
//       console.log(value);
//       // $('#paneltable').append(tableFill(value));
//     })
//   });
//
// })
