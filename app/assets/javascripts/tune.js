$(function(){

  $.ajax({
    url: "https://stg-resque.hakuapp.com/albums.json",
    method: "GET",
    dataType: 'jsonp'

  })
  .done(function( data ) {
    $.each(data, function(index, value){
      $('#boutique').append(htmlFill(value));
    })
  })
  .success(function(){
    initCarousel();
  });
  getSong(1);
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

})

function pre_move_callback(anchor, instanceid, frame){
  getSong(frame);
}

function getSong(albumId){

    $.ajax({
        url: "https://stg-resque.hakuapp.com/songs?album_id=" + albumId,
        method: "GET",
        dataType: 'jsonp'
    })
    .done(function( data ) {
      $('#songlist').html("");
      data.sort(function (a, b) {
        return a.song_order - b.song_order;
      });
      $.each(data, function(index, value){
        $('#songlist').append(tableFill(value));
      })
    })
    .success( function(){
      $('[data-toggle="tooltip"]').tooltip({
          container: 'body',
          trigger: 'hover'
      });
    });

}

function tableFill(value){
  var category = "";
  if (value.song_label == null) {
    category = "";
  }else{
    $.each(value.song_label, function(i,value){
      category += '<span id="explicit">'+ value +'</span>';
    })
  }
  return `<li class="list-group-item clearfix">
      <span class="badge" id="badge-custom">${value.song_duration}</span>
      <div class="col-sm-2 set-padding-0">
          <div class="col-sm-1 text-center">
            <span id="num">${value.song_order}</span>
          </div>
          <div class="text-center set-padding-0" id="star">
            <a href="#" data-placement="top" title="MARK AS FAVORITE" data-toggle="tooltip">
              <i class="fa fa-star" aria-hidden="true" style="font-size: 20px; color: #DDDDDD;"></i>
            </a>
          </div>
      </div>
      <div class="col-sm-7 set-padding-0">
        <span id="songname">${value.song_name}</span>
        ${category}
      </div>
  </li>`;
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

function initCarousel(){
  $('#boutique').boutique({
    container_width:	750,
    front_img_width:	170,
    front_img_height:	160,
    behind_opacity:	1,
    back_opacity:	1,
    hovergrowth:	0.0,
    speed:	800,
    behind_size:	1,
    back_size:	1,
    move_on_click: true
  });
}
