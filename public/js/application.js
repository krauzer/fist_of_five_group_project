$(document).ready(function() {
	console.log("works")

	$('#newTicket').hide();
	
	$(".oneTicket").mouseover(function(){
		setTimeout(refreshTickets, 10000);
		console.log("mouseover works")
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


function refreshTickets() { 
	// window.location.href = window.location.href;  //BUGBUG
	// var randomNumber = Math.floor(Math.random() * 100);
	// $('#tickets').html("Hello " + randomNumber);
	console.log("works")
	$.ajax({
		type: 'get',
		url: '/tickets',
		data: $(this).serialize()
	}).success(function(response){
		console.log("works");
		console.log(response)
		$('#tickets').empty();
		$('#tickets').html(response);
	}).fail({
		// console.log("Doest not work")
	})
}

function openForm (event) {
  event.preventDefault();
  $('#newTicket').show();
};