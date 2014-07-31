$(document).ready(function() {
	console.log("works")

	$('#newTicket').hide();
	
	$("#tickets").mouseover(function(){
		setTimeout(refreshTickets, 1000);
	});

	$('#createTicket').on('click', openForm);

	$('form#addTicket').submit(function(e) {
    e.preventDefault();
    console.log("works")
    $('#all').hide()
   $.ajax ({
      url: '/organizations/new',
      type: 'post',
      data: $(this).serialize(),
    }).success(function(response){
      console.log(response)
      $('form#newOrgForm').hide();
      $('#all').append(response)
      $('#all').show();
    }).fail(function(response){
      console.log("Not working.")
    })
  })

});


function refreshTickets(e) { 
	e.preventDefault();
	// window.location.href = window.location.href;  //BUGBUG
	var randomNumber = Math.floor(Math.random() * 100);
	$('#tickets').html("Hello " + randomNumber);

	// $.ajax({
	// 	type: 'get',
	// 	url: '/tickets',
	// 	data: $(this).serialize()
	// }).success(function(response){
	// 	console.log("works")
	// 	console.log(response)
	// }).fail({
	// 	console.log("works")
	// 	console.log(response)
	// })
}

function openForm (event) {
  event.preventDefault();
  $('#newTicket').show();
};