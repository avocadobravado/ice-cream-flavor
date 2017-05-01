$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var flavors = ["iceCream1", "iceCream2", "iceCream3"];
    var favoriteArray [iceCream1, iceCream2, iceCream3];

    flavors.forEach(function(flavor) {
      var userInput = $("input#" + flavor).val();
      $("." + flavor).text(userInput);
      $("ul").append("<li>" + userInput + "</li>");
    });
  });
});


// Make a web page that lists out your favorite ice cream flavors. Rather than writing the flavors in the HTML, use a JavaScript loop to insert the flavors into the page from an array.
