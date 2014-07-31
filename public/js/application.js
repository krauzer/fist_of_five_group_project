$(document).ready(function() {
	console.log("works")

	$('#tickets').ready(function(){
		setTimeout(refreshTickets, 10000);
	})

	$('#')

});


function refreshTickets() { 
	// event.preventDefault();
	window.location.href = window.location.href;  //BUGBUG
	$.ajax({
		type: 'get',
		url: '/tickets',
		data: $(this).serialize()
	}).success(function(response){
		console.log("works")
		console.log(response)
	}).fail({
		console.log("works")
		console.log(response)
	})
}