$(document).ready(function() {

  if ($("#submit_ticket") != null) {
    auto_refresh();
  };

  function auto_refresh() {
    var randomnumber = Math.floor(Math.random() * 100);
      $('#queue').text('I am getting refreshed every 3 seconds..! Random Number ==> '+ randomnumber);
  };

  var refreshID = setInterval(auto_refresh, 1000);

});
