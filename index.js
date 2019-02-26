$(function() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const userText = $(event.currentTarget).find('#shopping-list-entry').val();
    console.log(userText);
    //add item to ul
    $('ul').append('<li><span class="shopping-item">' + 
    userText + '</span>' +
    '<div class="shopping-item-controls">' + 
    '<button class="shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
    '</li>');
    $(event.currentTarget).find('#shopping-list-entry').val('');
  });
  
  $("ul").on("click", ".shopping-item-toggle", function(event) {
    event.preventDefault();
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
  });

  $("ul").on("click", ".shopping-item-delete", function(event) {
    event.preventDefault();
    $(this).parent().closest("li").remove();
  });
});
