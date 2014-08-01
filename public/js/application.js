$(document).ready(function() {

	// $("#tickets").mouseover(function(){
	// 	setTimeout(refreshTickets, 1000);
	// })
	// setTimeout(function(){
	// 	location= ''}, 6000);

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
	}).fail(function(data){
		console.log(':(')
	})
	})

	$("#remove").click(function(e){
		e.preventDefault();
		$.ajax({
			url: "/my_tickets/" + $("input[type=hidden]").val(),
			method: "delete",
			data: $("input[type=hidden]").val()
		}).success(function(data){
			console.log(data)
		})
	})

});

// function refreshTickets() {
// 	e.preventDefault();
// 	// window.location.href = window.location.href;  //BUGBUG
// 	var randomNumber = Math.floor(Math.random() * 100);
// 	$('#tickets').html("Hello " + randomNumber);
// }


// function refreshTickets(e) {
// 	e.preventDefault();
// 	// window.location.href = window.location.href;  //BUGBUG
// 	var randomNumber = Math.floor(Math.random() * 100);
// 	$('#tickets').html("Hello " + randomNumber);

// 	// $.ajax({
// 	// 	type: 'get',
// 	// 	url: '/tickets',
// 	// 	data: $(this).serialize()
// 	// }).success(function(response){
// 	// 	console.log("works")
// 	// 	console.log(response)
// 	// }).fail({
// 	// 	console.log("works")
// 	// 	console.log(response)
// 	// })
// }

