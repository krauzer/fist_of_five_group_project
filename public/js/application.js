$(document).ready(function() {

	// $("#tickets").mouseover(function(){
	// 	setTimeout(refreshTickets, 1000);
	// })

	$("#submit_ticket").click(function(e){
		e.preventDefault();
	$.ajax({
		url: "/my_tickets",
		method: "post",
		data: $('form').serialize()
	}).success(function(data){
		console.log("meow")
		console.log(data)
	}).fail(function(data){
		console.log(':(')
	})
	})
});


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

