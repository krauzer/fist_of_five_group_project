$(document).ready(function() {
	console.log("works")

	$('#newTicket').hide();
	
	$("form#refreshAll").submit(function(e){
		e.preventDefault();
		setTimeout(refreshTickets, 200);

		console.log("refresh button works")
	// window.location.href = window.location.href;  
  });

  $("#submit_ticket").click(function(e){
    e.preventDefault();
    var description = $("input[name=description]").val();
  $.ajax({
    url: "/my_tickets",
    method: "post",
    data: $('form').serialize()
  }).success(function(data){
    console.log("meow it works")
    //refreshTickets();
    var node = document.createTextNode(description);
    var li = document.createElement("li");
    li.appendChild(node);
    $("#ticket_history").append(li);
    window.location.reload();
  }).fail(function(data){
    console.log(':(')
  })
  })

  $("input[id=remove]").click(function(e){
    e.preventDefault();
    console.log("click")
    var id = $("input[type=hidden]").val();
    $.ajax({
      url: "/my_tickets/" + id,
      method: "delete",
      data: id
    }).success(function(data){
      window.location.reload();
    })
  })

    $("input[id=resolved]").click(function(e){
    e.preventDefault();
    console.log("click resolve")
    var id = $("input[type=hidden]").val();
    $.ajax({
      url: "my_tickets/" + id,
      method: "patch",
      data: id
    }).success(function(data){
      window.location.reload();
    })
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
		$('.tickets').hide().html(response).fadeIn('fast');
	}).fail(function(response){
		console.log("Doesn't not work")
	})
}

function openForm (event) {
  event.preventDefault();
  $('#newTicket').show();
};