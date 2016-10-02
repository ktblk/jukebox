# README

Jukebox app running from api for album, artist and song data.  Utilizing Ruby on Rails framework, html/css/JS/jQuery.  Bootstrap for styling.

Through process the following libraries were used for carousel functionality:
- slickjs
- waterwheel
- boutique
  - Botique is in the final version, but others can be seen through commits and were removed because of rigid functionality prohibiting effective usage.

Bootstrap was employed for styling to ensure usability across all platforms, including IE8 if necessary.

Data obtained via api - one for artists that populates the carousel, and then based on the album_id for the data per album (populated in the panel).  Javascript functions were used to create the call, as well as to populate the html via functions htmlFill() and tableFill().

htmlFill() populates the carousel, tableFill() populates the panel for the songs.

html/css were used primarily for styling, with some jQuery necessary to toggle options like the pressing and depressing of the star 'a' tag for color change and favoriting purposes.

Backend is Rails framework and utilizes the asset pipeline to institute all required outside sources (e.g. jQuery, Bootstrap, Font Awesome, etc.)
