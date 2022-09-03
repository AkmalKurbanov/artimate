$(document).ready(function () {

  var $container = $(".grid");
  $container.imagesLoaded(function () {
    $container.masonry({
      columnWidth: ".grid-item",
      itemSelector: ".grid-item",
      gutter: 40
    });
  });



});