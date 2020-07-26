$(function() {
  $.get("/users", function(users) {
    users.forEach(function(user) {
      $("<li></li>")
        .text(user.name)
        .appendTo("ul#users");
    });
  });
});
