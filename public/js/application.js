$(document).ready(function() {
	console.log("works")
	
	$("#tickets").mouseover(function(){
		setTimeout(refreshTickets, 1000);
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