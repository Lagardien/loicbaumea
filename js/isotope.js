export function Isotope() {
  // init Isotope
  var $grid = $(".grid").isotope({
    itemSelector: ".element-item"
    //   layoutMode: "fitRows"
  });
  // filter items on button click
  $(".filters-button-group").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue
    });
  });

  $(".button-group").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function() {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });
}
