$(document).ready(function() {
	console.log("works")

	var ticket_id;

	$('#newTicket').hide();

	if ($('span.label').attr('value') == "resolved") {
		$(this).parent().parent().css("border-color", "#FF0000")
	}
	
	$("form#refreshAll").submit(function(e){
		e.preventDefault();
		setTimeout(refreshTickets, 200);

		console.log("refresh button works")
	});

	$('form.resolvedButton').click(function(e){
		// e.preventDefault();
		$(this).parent().css("border-color", "#FF0000")
		// ticket_id = $(this).attr('value')
		
		// console.log("resolved button works");
		// $.ajax ({
		// 	type:'post',
		// 	url: '/tickets/'+ticket_id+'',
		// 	data: $(this).serialize()
		// }).success(function(response){
		// 	// console.log("works");
		// 	// console.log(response)
		// 	$('.tickets').hide().html(response).fadeIn('fast');
		// }).fail(function(response){
		// 	console.log("doesn't work")
		// })
	})

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
	// window.location.href = window.location.href;  
	console.log("refresh tickets works")

	$.ajax({
		type: 'post',
		url: '/tickets',
		data: $(this).serialize()
	}).success(function(response){
		console.log("ajax works");
		console.log(response)
		$('.tickets').hide().html(response).fadeIn('fast');
	}).fail(function(response){
		console.log("Doesn't not work")
	})
}

function openForm (event) {
  event.preventDefault();
  $('#newTicket').show();
};