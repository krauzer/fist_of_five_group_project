$(document).ready(function(){
	for (i=1; i<=42; i++) {
		$("ul#work_stations").append("<li id='"+i+"''></li>");
	};
	$("form[name='rooms']").change(function(e){
		if ($("form[name='rooms'] option:selected").val() == "workstations"){
			$("#work_area").show();
			$("#work_area li").click(function(e){
				var desk = this.id;
				$(this).css("background-color","yellow");
				var studentLocation = $("form[name='rooms'] option:selected").val().concat(desk);
				$("form[name='rooms'] option:selected").val( studentLocation );
			}); // close li.click
		} // close if statement
	}); // close form.change
	$("form[name='rooms']").submit(function(e){
		e.preventDefault();
		console.log("submitted the form");
		$.ajax({
			url: "/my_tickets",
			type: "post",
			data: $("form[name='rooms']").serialize(),
		}).success(function(response){
			console.log("that worked");
		}).fail(function(response){
			console.log("you screwed something up");
		}) // close ajax
		// console.log($("#rooms"));
	}) // close rooms.submit
}); // close document.read