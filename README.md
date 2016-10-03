# README

<!-- To initialize/repeat: -->
1. Create a Controller and subsequent view (e.g. 'tune/index')
2. Import a carousel library.  This may include, but is not limited to, JavaScript and CSS documentation that it may include.  These will initialize if you require tree throughout the application.
3. The carousel library ultimately used in this process was Boutique, which was malleable enough to get it to generate correctly for the mock up rendering.  (Others not recommended: slickjs and waterwheel, which both present difficulty in terms of targeting)
4. Place Bootstrap .css and .js links, as well as the FontAwesome CDN within the application.html.erb file.
5. Initialize carousel in the .js file for your view using their suggested function syntax (initCarousel in this project).
6. Create html within the boundaries of the carousel and create it in a function that will populate it back on the screen, looping per each element of JSON given by the API (per album), as well as institute an ajax call that will return the data from the API and loop through in a .each format to obtain each element for each card.
7. Do this as well for the song container.  This ajax will run by album_id, and will populate having to order by the song_order.
8. Format appropriately using CSS (or SCSS).  The tune.js file contains the formatting associated with the elements not given by the carousel.
9. Application.css is related to the Boutique carousel css given.
10. Institute buttons and link them to the given Boutique next and previous functions.  Customize them appropriately using SCSS or CSS.
<!-- ----------- -->


<!-- DESCRIPTION -->
Jukebox app running from api for album, artist and song data.  Utilizing Ruby on Rails framework, html/css/JS/jQuery.  Bootstrap for styling.

Through process the following libraries were used for carousel functionality:
- slickjs
- waterwheel
- boutique
  - Boutique is in the final version, but others can be seen through commits and were removed because of rigid functionality prohibiting effective usage.

Bootstrap was employed for styling to ensure usability across all platforms, including IE8 if necessary.

Data obtained via API - one for artists that populates the carousel, and then based on the album_id for the data per album (populated in the panel).  Javascript functions were used to create the call, as well as to populate the html via functions htmlFill() and tableFill().

htmlFill() populates the carousel, tableFill() populates the panel for the songs.

html/css/scss were used primarily for styling, with some jQuery necessary to toggle options like the pressing and depressing of the star 'a' tag for color change and favoriting purposes.

Backend is Rails framework and utilizes the asset pipeline to institute all required outside sources (e.g. jQuery, Bootstrap, Font Awesome, etc.)
<!-- DESCRIPTION -->



<!-- BONUS 1 -->
Models created: album, song and label

- Albums has_many :songs and draws from this API ("https://stg-resque.hakuapp.com/albums.json").  Its data table includes: album.name, album.artist_name, and album.cover_photo_url.  It would call to the JSON on the page, looping and creating an id each time an album was saved.

- Songs belongs_to :albums, and has_many :labels.  It would draw from this API: '"https://stg-resque.hakuapp.com/songs.json?album_id=" + album.id'.  The songs table is referenced to the album model, and therefore is liked via album_id (album.id).  It contains the fields: song.song_name, song.song_order (:integer), song.song_duration.

- Labels belongs_to :songs, and draws from the same API as songs.  It is an array of the song_label category.  In order to save these, the code would loop through the JSON and save a new label each time - then tie each separate label by the song_id from which it was rooted (songs:references).

- Controllers: Albums, Songs and Labels.

- JavaScript call would include a POST to the database for each model.

- Could also be completed with HTTParty (gem bundled in this app).
<!-- BONUS 1 -->
