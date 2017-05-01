$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var flavors = ["iceCream1", "iceCream2", "iceCream3"];

    flavors.forEach(function(flavor) {
      var flavor = $("input#" + flavor).val();
      $("." + flavor).text(flavor);
      $("ul").append("<li>" + flavor + "</li>");
    });
  });
});


// Make a web page that lists out your favorite ice cream flavors. Rather than writing the flavors in the HTML, use a JavaScript loop to insert the flavors into the page from an array.
