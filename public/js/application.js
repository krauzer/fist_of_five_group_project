$(document).ready(function() {
	console.log("works")

	$('#newTicket').hide();
	
	$("form#refreshAll").submit(function(e){
		e.preventDefault();
		setTimeout(refreshTickets, 200);

		console.log("refresh button works")
	});

	$('form.resolvedButton').click(function(e){
		$(this).parent().css("border-color", "#22F322")		
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

 $('#log_out_button').on("click", function (e) {
    e.preventDefault();
    $.ajax({
    	url: $(this).attr('href'),
    	type: 'delete',
    })
    .done(function() {
    	console.log("success");
    })
    .fail(function() {
    	console.log("error");
    })
    .always(function() {
    	console.log("complete");
    });
    
  });

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
		$('#ticket_sub').hide().html(response).fadeIn('fast');
	}).fail(function(response){
		console.log("Doesn't not work")
	})
}

function openForm (event) {
  event.preventDefault();
  $('#newTicket').show();
};