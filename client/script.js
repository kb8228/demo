$(document).ready(function(){
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
    // .done(function( data ) {
    //   $.each( data.items, function( i, item ) {
    //     $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
    //     if ( i === 3 ) {
    //       return false;
    //     }
    //   });
    // });
  .done(function( data ) {
    console.log('data: ', data);
    var images = {
      items: data.items.slice(0,4)
    };
    console.log("items: ", images.items);
    var template = $('#gallery-template').html();
    console.log("template: ", template);
    var info = Mustache.to_html(template, images);
    console.log('info: ', info);
    $('#images').html(info);
  });


});
